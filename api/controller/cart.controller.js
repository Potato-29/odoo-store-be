const {
  addItem,
  getCartItems,
  updateCartItem,
} = require("../service/cart.service");

module.exports = {
  addToCart: async (req, res) => {
    try {
      const cartItem = await addItem(req.body);
      if (cartItem) {
        res.json({
          msg: "Success",
          data: cartItem,
        });
      }
      if (!cartItem) {
        res.status(400).json({
          error: "Failed to add item",
        });
      }
    } catch (error) {
      console.log("error", error);
      res.status(400).json({
        error: error.message,
      });
    }
  },
  getCart: async (req, res) => {
    const { id } = req.params;
    try {
      const cartlist = await getCartItems(id);
      if (cartlist) {
        res.json({
          msg: "success",
          data: cartlist,
        });
      }
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },
  updateItem: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedItem = await updateCartItem(
        id,
        req.body.itemId,
        req.body.type
      );
      if (updatedItem) {
        res.json({
          msg: "success",
          data: updatedItem,
        });
      }
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },
};
