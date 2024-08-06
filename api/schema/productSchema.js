const { Schema } = require("mongoose");

const productSchema = new Schema({
  name: String,
  price: Number,
  image: String,
});

module.exports = productSchema;
