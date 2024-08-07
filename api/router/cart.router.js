const { Router } = require("express");
const {
  addToCart,
  getCart,
  updateItem,
} = require("../controller/cart.controller");

const router = Router();

router.post("/add", addToCart);
router.get("/items/:id", getCart);
router.post("/update/:id", updateItem);

module.exports = router;
