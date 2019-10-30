'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    dateReceived: DataTypes.DATEONLY
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
    Order.product = Order.belongsToMany(models.Product, { through: 'OrderLines' });
  };
  return Order;
};