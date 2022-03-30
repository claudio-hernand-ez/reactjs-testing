const { Order, Product } = require("../models");

const getOrderProducts = async (req, res) => {
  const { orderID = "" } = req.params;

  const orderDB = await Order.findById(orderID).populate("products");

  if (!orderDB) {
    return res.json({ status: 404, message: "Order not found" });
  }

  const products = orderDB.products;

  const total = orderDB.products?.length || 0;
  const totalPrice = orderDB.products?.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);

  res.json({ status: 200, data: { total, totalPrice, products } });
};

const postOrder = async (req, res) => {
  const { products = [] } = req.body;

  const newOrder = new Order({ date: new Date(), products });

  await newOrder.save();

  const total = newOrder.products?.length || 0;

  const totalPrice = products.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);

  res.json({
    status: 200,
    data: { newOrder: { ...newOrder._doc, total, totalPrice } },
  });
};

module.exports = {
  getOrderProducts,
  postOrder,
};
