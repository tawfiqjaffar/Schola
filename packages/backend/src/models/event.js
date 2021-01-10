const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Event", schema);
