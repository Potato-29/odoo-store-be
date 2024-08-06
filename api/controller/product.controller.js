const { productModel } = require("../model/productModel");
const {
  getAll,
  getSearchItems,
  addItem,
} = require("../service/product.service");

module.exports = {
  getAllProducts: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const search = req.query.search || "";

    const skip = (page - 1) * limit;

    const totalItems = await productModel
      .find({ name: new RegExp(search, "i") })
      .countDocuments();
    const totalPages = Math.ceil(totalItems / limit);
    try {
      const productsList = await getAll(skip, limit, search);
      if (productsList.length > 0) {
        res.json({
          msg: "Success",
          data: productsList,
          page,
          limit,
          totalPages,
          totalItems,
        });
      }
    } catch (error) {
      console.log("error", error);
      res.status(500).json({
        error: error.message,
      });
    }
  },
  searchItem: async (req, res) => {
    const query = req.query.search;
    try {
      const list = await getSearchItems(query);
      if (list) {
        res.json({
          msg: "success",
          data: list,
        });
      }
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  addProduct: async (req, res) => {
    try {
      const items = await addItem(req.body);
      if (items) {
        res.json({
          msg: "success",
          data: items,
        });
      }
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
};
