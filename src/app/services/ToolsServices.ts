import { Tools } from '../utils/Tools'
const { User, Tag, Tool, ToolTag } = require('../models')
const slugify = require('slugify')
const { Op } = require('sequelize')

const toolsUtilFunctions = new Tools()

class ToolsServices {
  async index(id_users, page: any = 1, tag = null) {
    let offset = 0
    let limit = 8
    if (isNaN(page) || page == 1) {
      offset = 0
    } else {
      if (page == 1) {
        offset = (page - 1) * limit
      } else {
        offset = (parseInt(page) - 1) * limit
      }
    }
    if (tag == null || tag == undefined || tag == NaN) {
      const tools = await Tool.findAndCountAll({
        where: {
          user_id: id_users,
        },
        order: [['id', 'DESC']],
        attributes: [
          'id',
          'title',
          'link',
          'description',
          'createdAt',
          'updatedAt',
        ],
        include: [
          {
            association: 'ToolTag',
            order: [['id', 'DESC']],
            attributes: ['id', 'title', 'slug', 'createdAt', 'updatedAt'],
          },
        ],
      })
      let next
      if (offset + limit >= tools.count) {
        next = false
      } else {
        next = true
      }
      let result = {
        page,
        next,
        tools,
      }
      return {
        next,
        count: result.tools.rows.length,
        page: parseInt(result.page),
        tools: result.tools.rows,
      }
    } else {
      const tools = await Tag.findAndCountAll({
        where: {
          title: {
            [Op.like]: '%' + tag + '%',
          },
        },
        order: [['id', 'DESC']],
        include: [
          {
            association: 'TagTool',
            order: [['id', 'DESC']],
            attributes: [
              'id',
              'title',
              'link',
              'description',
              'createdAt',
              'updatedAt',
              'ToolTag',
            ],
            include: [
              {
                association: 'ToolTag',
                order: [['id', 'DESC']],
                attributes: ['id', 'title', 'slug', 'createdAt', 'updatedAt'],
              },
            ],
            where: {
              user_id: id_users,
            },
          },
        ],
      })
      const getTools = await toolsUtilFunctions.reconfigToolsInGetWithTags(
        tools
      )
      return {
        count: getTools.length,
        tools: getTools,
      }
    }
  }

  async create(id_users, title, link, description, title_tags) {
    const user = await User.findByPk(id_users)

    if (user) {
      const [tools] = await Tool.findOrCreate({
        where: {
          title,
          link,
          description,
          user_id: id_users,
        },
      })
      await title_tags.forEach(async (tag) => {
        const [tagCreated] = await Tag.findOrCreate({
          where: {
            title: tag.toLowerCase(),
            slug: slugify(tag.toLowerCase()),
          },
        })
        await ToolTag.findOrCreate({
          where: {
            tool_id: tools.dataValues.id,
            tag_id: tagCreated.dataValues.id,
          },
        })
      })

      return tools
    } else {
      return 'User not Found'
    }
  }

  async update(id_users, id_tools, title, link, description, title_tags) {
    const user = await User.findByPk(id_users)
    const tool = await Tool.findByPk(id_tools)

    if (!user) {
      return 'User not Found'
    }
    if (!tool) {
      return 'Tools not Found'
    }

    await Tool.update(
      {
        title,
        link,
        description,
      },
      { where: { id: id_tools, user_id: id_users } }
    )

    const tools = await Tool.findOne({
      where: {
        title,
        link,
        description,
        user_id: id_users,
      },
      include: [
        {
          association: 'ToolTag',
          order: [['id', 'DESC']],
        },
      ],
    })

    await title_tags.forEach(async (tag) => {
      const [tagCreated] = await Tag.findOrCreate({
        where: {
          title: tag.toLowerCase(),
          slug: slugify(tag.toLowerCase()),
        },
      })
      await ToolTag.findOrCreate({
        where: {
          tool_id: tools.dataValues.id,
          tag_id: tagCreated.dataValues.id,
        },
      })
    })

    return tools
  }

  async delete(id_users, id_tools) {
    const user = await User.findByPk(id_users)
    const tools = await Tool.findByPk(id_tools)

    if (!user) {
      return 'User not Found'
    }
    if (!tools) {
      return 'Tools not Found'
    }

    if (id_users != null && id_users != undefined && id_users != NaN) {
      const toolDelete = await Tool.destroy({
        where: {
          id: id_tools,
          user_id: id_users,
        },
      })
      return toolDelete
    } else {
      return 'Invalid Id'
    }
  }
}

export { ToolsServices }
