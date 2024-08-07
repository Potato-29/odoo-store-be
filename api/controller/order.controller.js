const { cartModel } = require("../model/cartModel");
const { placeOrder } = require("../service/order.service");

module.exports = {
  placeCustomerOrder: async (req, res, next) => {
    try {
      const order = await placeOrder(req.body);
      const cart = await cartModel.findOneAndUpdate(
        { userId: req.body.user.id },
        {
          items: [],
        }
      );
      if (order) {
        res.json({
          msg: "Succces",
          data: order,
        });
      }
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
};
