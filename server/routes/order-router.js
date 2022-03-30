const { Router } = require("express");
const {
  getOrderProducts,
  postOrder,
} = require("../controllers/ordersController");

const router = Router();

router.get("/:orderID", getOrderProducts);

router.post("/", postOrder);

module.exports = router;
