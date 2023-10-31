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
      totalPrice: DataTypes.STRING,
      order_status_payment: DataTypes.INTEGER,
      order_status_transport: DataTypes.INTEGER,
      totalQuantity: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      shipAddress: DataTypes.STRING,
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
