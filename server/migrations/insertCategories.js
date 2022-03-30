const { Category, Product } = require("../models");

const inserCategories = async () => {
  const categories = [
    {
      name: "bow-and-crossbow",
      prefix: "Bow",
      extra: "_no_effect",
      items: 8,
    },
    {
      name: "minerals",
      prefix: "Mineral",
      items: 15,
    },
    {
      name: "potions",
      prefix: "Potion",
      items: 15,
    },
    {
      name: "shield-and-amulet",
      prefix: "Shield",
      items: 15,
    },
    {
      name: "skills",
      prefix: "Skill",
      items: 15,
    },
  ];

  categories.forEach(async (category) => {
    const newCategory = new Category({ name: category.name });
    await newCategory.save();

    // insert products to category
    for (let index = 0; index < category.items; index++) {
      const item = new Product({
        name: `${category.prefix} ${index + 1}`,
        price: Math.floor(Math.random() * 1000 + 1),
        picture: `Icon${index + 1}${category.extra ? category.extra : ""}`,
        category: newCategory._id,
      });
      await item.save();
    }
  });

  console.log("Categories saved successfully");
};

module.exports = {
  inserCategories,
};
