"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PayAndDel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PayAndDel.init(
    {
      orderId: DataTypes.INTEGER,
      paymentMethod: DataTypes.STRING,
      itemPrice: DataTypes.STRING,
      shippingPrice: DataTypes.STRING,
      totalPrice: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      isPaid: DataTypes.INTEGER,
      paidAt: DataTypes.STRING,
      isDelivered: DataTypes.INTEGER,
      deliveredAt: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PayAndDel",
      freezeTableName: true,
    }
  );
  return PayAndDel;
};
