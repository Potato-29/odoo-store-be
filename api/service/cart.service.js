const { cartModel } = require("../model/cartModel");

module.exports = {
  addItem: async (body) => {
    try {
      const addedItem = await cartModel.create(body);
      return true;
    } catch (error) {
      return false;
    }
  },
  getCartItems: async () => {
    const items = await cartModel.find({}).exec();
    return items;
  },
  updateCartItem: async (id, type) => {
    const item = await cartModel.findOne({ _id: id }).exec();
    if (item.qty === 1 && type === "decrease") {
      cartModel.deleteOne({ _id: id }).exec();
    }
    const updateItem = await cartModel
      .findOneAndUpdate(
        { _id: id },
        {
          qty: type === "increase" ? (item.qty += 1) : (item.qty -= 1),
        }
      )
      .exec();
    return true;
  },
};
