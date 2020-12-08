const mongoose = require('mongoose');

const exerciceSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Exercice', exerciceSchema);
