const { default: mongoose } = require("mongoose");
const orderSchema = require("../schema/orderSchema");

const orderModel = new mongoose.model("shipment", orderSchema);

module.exports = { orderModel };
