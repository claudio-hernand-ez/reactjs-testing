const { Product, Category } = require("../models");

const getCategoriesWithProducts = async (req, res) => {
  const categories = await Category.find();

  let categoriesWithProducts = [];
  // categories.map((category) => {
  //   Product.find({ category: category._id }, (products) => {
  //     const categoryWithProducts = {
  //       ...category._doc,
  //       products,
  //     };
  //     console.log(categoryWithProducts);
  //     categoriesWithProducts.push(categoryWithProducts);
  //   });
  // });

  // console.log(categoriesWithProducts);
  res.json({ status: 200, data: { categories: categoriesWithProducts } });
};

const getCategoryProducts = async (req, res) => {
  const { category = "all" } = req.params;

  const categoryDB = await Category.findOne({ name: category });

  if (!categoryDB && category !== "all") {
    return res.json({ status: 404, message: "Category not found" });
  }

  let query = {};

  if (category === "all") query = { category: categoryDB };

  const [total, products] = await Promise.all([
    Product.countDocuments(query),
    Product.find(query),
  ]);

  res.json({ status: 200, data: { total, products } });
};

module.exports = {
  getCategoryProducts,
  getCategoriesWithProducts,
};
