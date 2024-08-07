const { userModel } = require("../model/userModel");
const { cartModel } = require("../model/cartModel");
const { getUser, createUser } = require("../service/user.service");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res, next) => {
    let { email, password } = req.body;

    try {
      let existingUser;
      try {
        existingUser = await getUser(email);
      } catch {
        const error = new Error("Error! Something went wrong.");
        return next(error);
      }
      if (!existingUser || existingUser.password != password) {
        const error = Error("Wrong details please check at once");
        return next(error);
      }
      let token;
      try {
        token = jwt.sign(
          {
            userId: existingUser.id,
            email: existingUser.email,
          },
          process.env.JWT_KEY,
          { expiresIn: "1h" }
        );
      } catch (err) {
        console.log(err);
        const error = new Error("Error! Something went wrong.");
        return next(error);
      }
      if (token) {
        const updateUser = await userModel.findOneAndUpdate(
          {
            _id: existingUser._id,
          },
          {
            token: token,
          }
        );
        const userCart = await cartModel
          .findOne({ userId: existingUser._id })
          .exec();
        console.log(userCart);

        if (!userCart) {
          const createCart = await cartModel.create({
            userId: existingUser._id,
            items: [],
          });
        }
        res.json({
          msg: "success",
          data: {
            userId: existingUser.id,
            email: existingUser.email,
            token: token,
          },
        });
      }
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },
  signup: async (req, res, next) => {
    try {
      const newUser = await createUser(req.body);

      let token;
      try {
        token = jwt.sign(
          {
            userId: newUser.id,
            email: newUser.email,
          },
          process.env.JWT_KEY,
          { expiresIn: "1h" }
        );
        res.json({
          msg: "success",
          data: {
            userId: newUser.id,
            email: newUser.email,
            token: token,
          },
        });
      } catch (err) {
        console.log("", err);
        const error = new Error("Error! Something went wrong.");
        return next(error);
      }
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },
};
