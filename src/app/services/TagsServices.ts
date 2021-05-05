const { Tag } = require('../models')
const slugify = require('slugify')

class TagsServices {
  async index(page: any = 1) {
    let offset = 0
    let limit = 8
    if (isNaN(page) || page == 1) {
      offset = 0
    } else {
      if (page === 1) {
        offset = (page - 1) * limit
      } else {
        offset = (parseInt(page) - 1) * limit
      }
    }
    const tags = await Tag.findAndCountAll({
      order: [['id', 'DESC']],
    })
    let next
    if (offset + limit >= tags.count) {
      next = false
    } else {
      next = true
    }
    let result = {
      page,
      next,
      tags,
    }
    return {
      next,
      page: parseInt(result.page),
      tags: result.tags.rows,
    }
  }
  async create(title) {
    const [tags] = await Tag.findOrCreate({
      where: {
        title,
        slug: slugify(title.toLowerCase()),
      },
    })
    return tags
  }

  async update(id_tag, title) {
    const tag = await Tag.update(
      {
        title,
        slug: slugify(title.toLowerCase()),
      },
      { where: { id: id_tag } }
    )

    return tag
  }
  async delete(id_tag) {
    const tag = await Tag.destroy({
      where: {
        id: id_tag,
      },
    })

    return tag
  }
}

export { TagsServices }
