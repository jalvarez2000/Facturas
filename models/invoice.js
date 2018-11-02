'use strict';

module.exports = (sequelize, DataTypes) => {
  var Invoice = sequelize.define('Invoice', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    Billing_Date: DataTypes.DATE,
    Provider: { type: DataTypes.STRING, length: 100},
    Total: DataTypes.DECIMAL(10,2),
    Base: DataTypes.DECIMAL(10,2),
    IVA: DataTypes.DECIMAL(2,2),
    Comments: { type: DataTypes.STRING, length: 1000},
    User_id: DataTypes.INTEGER
  }, {});

  Invoice.associate = function(models) {
    Invoice.belongsTo(models.User, {
      foreignKey: 'User_id',
      as: 'user'
    });
  };

  return Invoice;
};