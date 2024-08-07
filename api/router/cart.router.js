const { Router } = require("express");
const {
  addToCart,
  getCart,
  updateItem,
} = require("../controller/cart.controller");
const validateToken = require("../middleware/validateToken");

const router = Router();

router.post("/add", validateToken, addToCart);
router.get("/items/:id", validateToken, getCart);
router.post("/update/:id", validateToken, updateItem);

module.exports = router;
