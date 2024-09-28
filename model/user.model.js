const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    nickname: {
      type: String,
      default: "",
    },
    firstname: {
      type: String,
      default: "",
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", UserSchema);
