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
      as: 'tags-tools',
    })

    Tag.belongsToMany(models.User, {
      foreignKey: 'tag_id',
      through: 'users_tags',
      as: 'tags-users',
    })
  }
  return Tag
}


