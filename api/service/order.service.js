const { orderModel } = require("../model/orderModel");

module.exports = {
  placeOrder: async (body) => {
    const order = await orderModel.create(body);
    return order;
  },
};
