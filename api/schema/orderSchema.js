const { Schema } = require("mongoose");

const orderSchema = new Schema({
  user: Object,
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
