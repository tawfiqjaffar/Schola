const mongoose = require('mongoose');

const MCQSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  classesLevel: {
    type: String,
    required: true,
  },
  serieNumber: {
    type: Number,
    required: true,
  },
  timeTrial: {
    type: Boolean,
    required: true,
  },
  timer: {
    type: Number,
    required: true,
  },
  question: {
    type: [String],
    required: true,
  },
  answerA: {
    type: [String],
    required: true,
  },
  answerB: {
    type: [String],
    required: true,
  },
  answerC: {
    type: [String],
    required: true,
  },
  answerD: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model('MCQ', MCQSchema);
