const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  name: {
    type: "string",
    required: [true, "name is required"],
  },
  price: {
    type: "number",
    required: [true, "price is required"],
  },
  picture: {
    type: "string",
    required: [true, "picture is required"],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "category is required"],
  },
});

module.exports = model("Product", ProductSchema);
