const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  teacherId: { type: mongoose.Schema.Types.ObjectId, required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model("Teacher", teacherSchema);
