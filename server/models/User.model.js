const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    email_address: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    icon: {
      type: Number,
      required: true,
      default: 0, 
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
