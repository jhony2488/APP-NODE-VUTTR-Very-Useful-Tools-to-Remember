import { ToolsServices } from '../services/ToolsServices'

interface CRUD {
  index(req, res): void
  create(req, res): void
  update(req, res): void
  delete(req, res): void
}

class ToolsControllers implements CRUD {
  async index(req, res) {
    const { id_users } = req.params
    const { tag, page } = req.query

    const toolsService = new ToolsServices()

    try {
      if (tag && page) {
        const result = await toolsService.index(id_users, page, tag)
        return res.json(result)
      } else if (page) {
        const result = await toolsService.index(id_users, page)
        return res.json(result)
      } else if (tag) {
        const result = await toolsService.index(id_users, 1, tag)
        return res.json(result)
      }
      const result = await toolsService.index(id_users)
      return res.json(result)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
  async create(req, res) {
    const { title, link, description, title_tags } = req.body
    const { id_users } = req.params
    const toolsService = new ToolsServices()

    try {
      const result = await toolsService.create(
        id_users,
        title,
        link,
        description,
        title_tags
      )
      if (result == 'User not Found') {
        return res.json({ message: result })
      }

      return res.json(result)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
  async update(req, res) {
    const { title, link, description, title_tags } = req.body
    const { id_users, id_tools } = req.params
    const toolsService = new ToolsServices()

    try {
      const result = await toolsService.update(
        id_users,
        id_tools,
        title,
        link,
        description,
        title_tags
      )
      if (result == 'User not Found' || result == 'Tools not Found') {
        return res.json({ message: result })
      }

      return res.json(result)
    } catch (err) {
      return res.status(400).json({ message: err.message, jhony: 'message' })
    }
  }
  async delete(req, res) {
    const { id_users, id_tools } = req.params
    const toolsService = new ToolsServices()

    try {
      const result = await toolsService.delete(id_users, id_tools)
      if (
        result == 'User not Found' ||
        result == 'Tools not Found' ||
        result == 'Invalid Id'
      ) {
        return res.json({ message: result })
      }

      return res.json(result)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}

module.exports = new ToolsControllers()
