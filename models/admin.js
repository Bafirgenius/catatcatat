//Import dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Table
const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      minlength: 3,
      maxlength: 255,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "post",
        required: true
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "admin",
  }
);

//Export modules
module.exports = mongoose.model("admin", adminSchema);
