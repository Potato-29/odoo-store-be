const { Router } = require("express");
const { placeCustomerOrder } = require("../controller/order.controller");

const router = Router();

router.post("/place", placeCustomerOrder);

module.exports = router;
