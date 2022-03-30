const { Schema, model } = require("mongoose");

const CategorySchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
});

module.exports = model("Category", CategorySchema);
