const { Router } = require("express");
const {
  getCategoryProducts,
  getCategoriesWithProducts,
} = require("../controllers/categoriesController");

const router = Router();

router.get("/", getCategoriesWithProducts);
router.get("/:category/products", getCategoryProducts);

module.exports = router;
