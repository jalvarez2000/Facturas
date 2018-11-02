'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    firstname: DataTypes.STRING(100),
    lastname: DataTypes.STRING(100),
    email: DataTypes.STRING(200)
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Invoice, {
      foreignKey: 'User_id',
      as: 'invoices',
    });
  };

  return User;
};