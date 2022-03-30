const { Product, Category } = require("../models");

const getProducts = async (req, res) => {
  const [total, products, categories] = await Promise.all([
    Product.countDocuments(),
    Product.find().populate("category", "name"),
    Category.find(),
  ]);

  let groupedByCategory = [];

  categories.forEach((category) => {
    const productsOfCategory = products.filter(
      (product) => product.category.name === category.name
    );
    groupedByCategory.push({
      name: category.name,
      items: productsOfCategory,
    });
  });

  res.json({ total, categories: groupedByCategory });
};

module.exports = {
  getProducts,
};
