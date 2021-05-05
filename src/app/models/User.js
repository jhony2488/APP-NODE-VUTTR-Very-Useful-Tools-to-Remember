module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      uuid: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password_hash: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      tableName: 'users',
      timestamps: true,
    }
  )
  User.associate = function (models) {
    User.hasMany(models.Tool, { foreignKey: 'user_id', as: 'tools' })

  }
  return User
}
