const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  usersId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
