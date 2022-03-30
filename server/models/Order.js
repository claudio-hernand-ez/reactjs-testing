const { Schema, model } = require("mongoose");
const Product = require("./Product");

const OrderSchema = Schema({
  date: {
    type: Date,
    required: [true, "date is required"],
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = model("Order", OrderSchema);
