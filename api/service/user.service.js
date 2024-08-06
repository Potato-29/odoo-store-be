const { userModel } = require("../model/userModel");

module.exports = {
  getUser: async (email) => {
    const user = await userModel.findOne({ email: email });
    return user;
  },
  createUser: async (body) => {
    const user = await userModel.create(body);
    return user;
  },
};
