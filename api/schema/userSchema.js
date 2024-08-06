const { Schema } = require("mongoose");

const userSchema = new Schema({
  email: String,
  password: String,
});

module.exports = userSchema;
