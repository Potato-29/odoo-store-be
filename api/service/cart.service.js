const { cartModel } = require("../model/cartModel");
const { ObjectId } = require("mongodb");
module.exports = {
  addItem: async (body) => {
    try {
      const existingCart = await cartModel
        .findOne({ userId: body.userId })
        .exec();
      const addedItem = await cartModel.findOneAndUpdate(
        { userId: body.userId },
        { items: [...existingCart.items, ...body.items] }
      );
      return true;
    } catch (error) {
      console.error("error", error);
      return false;
    }
  },
  getCartItems: async (id) => {
    const items = await cartModel.find({ userId: id }).exec();
    return items;
  },
  updateCartItem: async (id, itemId, type) => {
    const cart = await cartModel.findOne({ _id: id }).exec();
    let objectItemId = new ObjectId(itemId);
    let updatedCart = cart.items.map((item) => {
      if (objectItemId.equals(item._id)) {
        if (type === "increase") {
          item.qty += 1;
          return item;
        } else {
          if (item.qty > 1) {
            item.qty -= 1;
            return item;
          } else {
            let itemIndex = cart.items.findIndex((cartitem) =>
              objectItemId.equals(cartitem._id)
            );
            cart.items.splice(itemIndex, 1);
            return item;
          }
        }
      }
    });
    const updateCart = await cartModel.findOneAndUpdate({ _id: id }, cart);
    return updateCart;
  },
};
