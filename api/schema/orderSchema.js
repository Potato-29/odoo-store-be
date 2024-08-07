const { Schema } = require("mongoose");

const orderSchema = new Schema({
  user: Object,
  shippingStatus: String,
  order: {
    userId: String,
    items: [
      {
        name: String,
        price: Number,
        image: String,
        qty: Number,
      },
    ],
  },
  address: {
    shippingAddress: String,
    billingAddress: String,
  },
});

module.exports = orderSchema;
