const mongoose = require("mongoose");

const canteenSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  starter: {
    type: String,
    required: true,
  },
  meal: {
    type: String,
    required: true,
  },
  dessert: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Canteen", canteenSchema);
