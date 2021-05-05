module.exports = (sequelize, DataTypes) => {
  const ToolTag = sequelize.define(
    'ToolTag',
    {
      tool_id: DataTypes.INTEGER,
      tag_id: DataTypes.INTEGER,
    },
    {
      freezeTableName: true,
      tableName: 'tools_tags',
      timestamps: true,
    }
  )

  return ToolTag
}
