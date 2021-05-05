import jwtlogin from 'jsonwebtoken'
import { UsersServices } from '../services/UsersServices'

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  })
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  })
}

interface CRUDUser {
  index(req, res): void
  login(req, res): void
  create(req, res): void
  update(req, res): void
  delete(req, res): void
}

class UsersControllers implements CRUDUser {
  async index(req, res) {
    const { id_users } = req.params
    const { tag } = req.query
    const userService = new UsersServices()

    try {
      let result
      if (tag) {
        result = await userService.index(id_users, tag)
      } else {
        result = await userService.index(id_users)
      }
      return res.json(result)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }

  async login(req, res) {
    const { email, password } = req.body
    const userService = new UsersServices()
    try {
      const user = await userService.login(email, password)

      if (user == 'Incorrect Password' || user == 'User Not Found') {
        return res.json({ message: user })
      }
      const token = await jwtlogin.sign(
        {
          id: user.id,
          uuid: user.uuid,
        },
        process.env.APP_SECRET
      )
      return res.header('auth-token', token).json({
        error: null,
        data: { token, id: user.id, uuid: user.uuid },
      })
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }

  async create(req, res) {
    const { name, email, password, codeSecret } = req.body
    const userService = new UsersServices()

    try {
      let user
      if (codeSecret != null && codeSecret != undefined && codeSecret != NaN) {
        user = await userService.create(name, email, password, codeSecret)
      } else {
        user = await userService.create(name, email, password)
      }
      if (user == 'Esse email já esta cadastrado') {
        return res.json({ message: user })
      }
      return res.json(user)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }

  async update(req, res) {
    const { name, email, codeSecret } = req.body
    const { id_users } = req.params
    const userService = new UsersServices()

    try {
      let user
      if (codeSecret) {
        user = await userService.update(id_users, name, email, codeSecret)
      } else {
        user = await userService.update(id_users, name, email)
      }
      if (user == 'another user has this email') {
        return res.json({ message: user })
      }
      return res.json(user)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
  async redefinedPassword(req, res) {
    const { password } = req.body
    const { id_users } = req.params
    const userService = new UsersServices()

    try {
      const user = await userService.redefinedPassword(id_users, password)

      res.json(user)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }

  async delete(req, res) {
    const { id_users } = req.params
    const userService = new UsersServices()

    try {
      const user = await userService.delete(id_users)
      if (user == 'Invalid User uuid') {
        return res.json({ message: user })
      }
      return res.json(user)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}

module.exports = new UsersControllers()
