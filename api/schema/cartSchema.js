const { Schema } = require("mongoose");

const cartSchema = new Schema({
  userId: String,
  items: [
    {
      name: String,
      price: Number,
      image: String,
      qty: { type: Number, default: 1 },
    },
  ],
});

module.exports = cartSchema;
