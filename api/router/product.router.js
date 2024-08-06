const { Router } = require("express");
const {
  getAllProducts,
  searchItem,
  addProduct,
} = require("../controller/product.controller");
const validateToken = require("../middleware/validateToken");

const router = Router();

router.get("/get-products", validateToken, getAllProducts);
router.get("/list", searchItem);
router.post("/add", addProduct);

module.exports = router;
