const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  classYear: {
    type: String,
    required: true,
  },
  classLevel: {
    type: String,
    required: true,
  },
  classNumber: {
    type: String,
    required: true,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  absence: [{ type: mongoose.Schema.Types.ObjectId, ref: "Absence" }],
  studentsId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

module.exports = mongoose.model("Class", classSchema);
