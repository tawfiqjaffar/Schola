const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  usersId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
  },
});

module.exports = mongoose.model('Schedule', scheduleSchema);
