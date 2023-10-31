"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Order", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      userId: {
        type: Sequelize.INTEGER,
      },
      totalPrice: {
        type: Sequelize.STRING,
      },
      order_status_payment: {
        type: Sequelize.INTEGER,
      },
      order_status_transport: {
        type: Sequelize.INTEGER,
      },
      totalQuantity: {
        type: Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.INTEGER,
      },

      shipAddress: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Order");
  },
};
