const { Router } = require("express");
const {
  placeCustomerOrder,
  trackShipment,
} = require("../controller/order.controller");
const validateToken = require("../middleware/validateToken");

const router = Router();

router.post("/place", validateToken, placeCustomerOrder);
router.get("/track", validateToken, trackShipment);

module.exports = router;
