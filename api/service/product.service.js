const { productModel } = require("../model/productModel");

module.exports = {
  getAll: async (skip, limit, search) => {
    const products = await productModel
      .find({ name: new RegExp(search, "i") })
      .skip(skip)
      .limit(limit)
      .exec();
    return products;
  },
  getSearchItems: async (query) => {
    const items = await productModel
      .find({
        name: new RegExp(query, "i"),
      })
      .exec();
    return items;
  },
  addItem: async (body) => {
    const addedItem = await new productModel({ ...body });
    addedItem.save();
    return addedItem;
  },
};
