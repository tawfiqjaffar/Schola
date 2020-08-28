const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  publisherId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  grade: {
    type: Number,
  },
  label: {
    type: String,
  },
});

module.exports = mongoose.model('Grade', gradeSchema);
