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
      productId: {
        type: Sequelize.INTEGER,
      },
      totalQuantity: {
        type: Sequelize.INTEGER,
      },
      shipPrice: {
        type: Sequelize.STRING,
      },
      totalPrice: {
        type: Sequelize.STRING,
      },
      shipAddress: {
        type: Sequelize.STRING,
      },
      cusName: {
        type: Sequelize.STRING,
      },
      cusPhoneNumber: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      paymentMethod: {
        type: Sequelize.STRING,
      },
      order_status_payment: {
        type: Sequelize.INTEGER,
      },
      order_status_transport: {
        type: Sequelize.INTEGER,
      },
      isPaid: {
        type: Sequelize.INTEGER,
      },
      paidAt: {
        type: Sequelize.STRING,
      },
      isDelivered: {
        type: Sequelize.INTEGER,
      },
      deliveredAt: {
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
