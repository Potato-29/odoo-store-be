const { default: mongoose } = require("mongoose");
const productSchema = require("../schema/productSchema");

const productModel = new mongoose.model("product", productSchema);

module.exports = { productModel };
