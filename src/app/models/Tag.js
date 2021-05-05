module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    'Tag',
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      tableName: 'tags',
      timestamps: true,
    }
  )
  Tag.associate = function (models) {
    Tag.belongsToMany(models.Tool, {
      foreignKey: 'tag_id',
      through: 'tools_tags',
      as: 'TagTool',
      otherKey: 'tool_id'
    })
  }
  return Tag
}


