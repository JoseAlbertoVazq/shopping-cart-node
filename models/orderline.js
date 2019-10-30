'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderLine = sequelize.define('OrderLine', {
    idProduct: DataTypes.BIGINT,
    idOrder: DataTypes.BIGINT,
    quantity: DataTypes.BIGINT
  }, {});
  OrderLine.associate = function(models) {
    // associations can be defined here
  };
  return OrderLine;
};