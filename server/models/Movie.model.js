const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true
    },
    img_address: {
      type: String,
      unique: true,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    ratings: {
        type: Array,
        required: true,
        default: []
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", movieSchema);
