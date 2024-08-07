const { orderModel } = require("../model/orderModel");

module.exports = {
  placeOrder: async (body) => {
    const order = await orderModel.create(body);
    return order;
  },
  trackOrder: async () => {
    const order = await orderModel.find({}).exec();
    return order;
  },
};
