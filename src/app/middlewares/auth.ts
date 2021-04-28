const jwt = require('jsonwebtoken')
const { User } = require('../models')

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  })
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  })
}
class Authentication {
  async auth(req, res, next) {
    const authHeader = req.header('auth-token')

    if (!authHeader) {
      return res.status(401).json({ message: 'Token not provided' })
    }
    const token = req.header('auth-token')
    const jwtApp = await jwt.sign(
      {
        token,
      },
      token
    )
    try {
      const verified = await jwt.verify(jwtApp, process.env.APP_SECRET)
      req.user = verified
      if (req.user) {
        next()
      }
    } catch (error) {
      return res.status(401).json({ message: 'Token Invalid', error })
    }
  }
  async authAdmin(req, res, next) {
    const authHeader = req.header('auth-token')
    const idUser = req.header('user_id')

    if (!authHeader) {
      return res.status(401).json({ message: 'Token not provided' })
    }

    if (!idUser) {
      return res.status(401).json({ message: 'Undefined id User Admin' })
    } else {
      const user = await User.findOne({
        where: {
          id: idUser,
          admin: true,
        },
      })
      if (!user) {
        return res.status(401).json({ message: 'User not Admin' })
      }
    }

    const token = authHeader

    const jwtApp = await jwt.sign(
      {
        token,
      },
      token
    )

    try {
      const verified = await jwt.verify(jwtApp, process.env.APP_SECRET)
      req.user = verified
      if (req.user) {
        next()
      }
    } catch (error) {
      return res.status(401).json({ message: 'Token Invalid', error })
    }
  }
}

export { Authentication }
