class ToolsUnitFunctions {
  async reconfigToolsInGetWithTags(tools) {
    const getTools = await tools.rows.map((tool) => {
      return tool.TagTool.map((item) => {
        return {
          id: item.id,
          title: item.title,
          link: item.link,
          description: item.description,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        }
      })
    })

    let getToolsConfig = await getTools.reduce(
      (list, sub) => list.concat(sub),
      []
    )
    getToolsConfig = await getToolsConfig.filter(function (item) {
      return !this[JSON.stringify(item)] && (this[JSON.stringify(item)] = true)
    }, Object.create(null))

    return getToolsConfig
  }
}

export { ToolsUnitFunctions }
