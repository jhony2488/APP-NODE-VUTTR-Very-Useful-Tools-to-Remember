module.exports = (sequelize, DataTypes) => {
  const Tool = sequelize.define(
    'Tool',
    {
      title: DataTypes.STRING,
      link: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      freezeTableName: true,
      tableName: 'tools',
      timestamps: true,
    }
  )
  Tool.associate = function (models) {
    Tool.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })

    Tool.belongsToMany(models.Tag, {
      foreignKey: 'tool_id',
      through: 'tools_tags',
      as: 'tags-tools',
    })
  }

  return Tool
}
