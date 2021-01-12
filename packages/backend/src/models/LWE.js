const mongoose = require("mongoose");

const lweSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  classLevel: {
    type: String,
    required: true,
  },
  serieNumber: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Lwe", lweSchema);
