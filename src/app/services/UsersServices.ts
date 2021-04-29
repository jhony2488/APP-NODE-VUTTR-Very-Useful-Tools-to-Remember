import { v4 } from 'uuid'
const { User } = require('../models')

const bcryptjs = require('bcryptjs')
const { Op } = require('sequelize')

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  })
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  })
}

class UsersServices {
  async index(id_users: string, tag: string = '') {
    let user
    if (tag == '') {
      user = await User.findOne({
        where: {
          id: id_users,
        },
        include: [
          {
            association: 'tools',
            order: [['id', 'DESC']],
            include: [
              {
                association: 'tags-tools',
                order: [['id', 'DESC']],
              },
            ],
          },
        ],
      })
    } else {
      user = await User.findOne({
        where: {
          id: id_users,
        },
        include: [
          {
            association: 'tools',
            order: [['id', 'DESC']],
            include: [
              {
                association: 'tags-tools',
                order: [['id', 'DESC']],
                where: {
                  users_tags: {
                    [Op.like]: tag,
                  },
                },
              },
            ],
          },
        ],
      })
    }

    return user
  }

  async login(email: string, password: string) {
    const user = await User.findOne({
      where: {
        email,
      },
    })

    if (user) {
      let correct = bcryptjs.compareSync(password, user.password_hash)

      if (correct) {
        return user
      } else {
        return 'Incorrect Password'
      }
    } else {
      return 'User Not Found'
    }
  }

  async create(
    name: string,
    email: string,
    password: string,
    codeSecret: string = ''
  ) {
    const salt = await bcryptjs.genSaltSync(10)
    let password_hash = await bcryptjs.hashSync(password, salt)

    const user = await User.findOne({ where: { email } })

    if (!user) {
      if (codeSecret == process.env.CODE_SECRET_ADMIN) {
        const userCreated = await User.create({
          uuid: v4(),
          name,
          email,
          password_hash,
          admin: true,
        })
        return userCreated
      } else {
        const userCreated = await User.create({
          uuid: v4(),
          name,
          email,
          password_hash,
          admin: false,
        })
        return userCreated
      }
    } else {
      return 'Esse email já esta cadastrado'
    }
  }

  async update(
    id_users: string,
    name: string,
    email: string,
    codeSecret: string = ''
  ) {
    const userVerify = await User.findOne({ where: { email } })

    if (userVerify.id != id_users && userVerify) {
      return 'another user has this email'
    }

    if (codeSecret == process.env.CODE_SECRET_ADMIN) {
      const userUpdated = await User.update(
        {
          name,
          email,
          admin: true,
        },
        { where: { id: id_users } }
      )
      return userUpdated
    }
    const userUpdated = User.update(
      {
        name,
        email,
      },
      { where: { id: id_users } }
    )
    return userUpdated
  }

  async redefinedPassword(id_users: string, password: string) {
    const salt = await bcryptjs.genSaltSync(10)
    let password_hash = await bcryptjs.hashSync(password, salt)

    const userUpdated = await User.update(
      {
        password_hash,
      },
      { where: { id: id_users } }
    )

    return userUpdated
  }
  async delete(id_users: string) {
    if (id_users != null && id_users != undefined) {
      User.destroy({
        where: {
          id: id_users,
        },
      })
    } else {
      return 'Invalid User uuid'
    }
  }
}

export { UsersServices }
