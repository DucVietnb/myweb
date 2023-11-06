"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      totalQuantity: DataTypes.INTEGER,
      shipPrice: DataTypes.STRING,
      totalPrice: DataTypes.STRING,
      shipAddress: DataTypes.STRING,
      cusName: DataTypes.STRING,
      cusPhoneNumber: DataTypes.STRING,
      status: DataTypes.INTEGER,
      paymentMethod: DataTypes.STRING,
      order_status_payment: DataTypes.INTEGER,
      order_status_transport: DataTypes.INTEGER,
      isPaid: DataTypes.INTEGER,
      paidAt: DataTypes.STRING,
      isDelivered: DataTypes.INTEGER,
      deliveredAt: DataTypes.STRING,
      note: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
      freezeTableName: true,
    }
  );
  return Order;
};
