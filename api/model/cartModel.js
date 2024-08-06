const { default: mongoose } = require("mongoose");
const cartSchema = require("../schema/cartSchema");

const cartModel = new mongoose.model("cart", cartSchema);

module.exports = { cartModel };
