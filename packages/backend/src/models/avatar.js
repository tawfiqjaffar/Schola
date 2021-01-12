const mongoose = require("mongoose");

const avatarSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    unique: true,
  },
  path: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Avatar", avatarSchema);
