//Import dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Table
const postSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    marketplace: {
      type: String,
      required: [true, "Marketplace is required"],
    },
    number: {
      type: String,
      required: [true, "Number is required"],
    },
    size: {
      type: String,
      required: [true, "Size is required"],
    },
    color: {
      type: String,
      required: [true, "Color is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    createdAt: {
      type: String,
    },
  },
  {
    collection: "post",
  }
);

//Export modules
module.exports = mongoose.model("post", postSchema);
