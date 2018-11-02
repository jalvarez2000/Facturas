'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Provider: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      Comments: {
        type: Sequelize.STRING(1000)
      },
      Total: {
        AllowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      Base: {
        AllowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      IVA: {
        AllowNull: false,
        type: Sequelize.DECIMAL(5,2)
      },
      Billing_Date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      User_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Invoices');
  }
};