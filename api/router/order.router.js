const { Router } = require("express");
const { placeCustomerOrder } = require("../controller/order.controller");
const validateToken = require("../middleware/validateToken");

const router = Router();

router.post("/place", validateToken, placeCustomerOrder);

module.exports = router;
