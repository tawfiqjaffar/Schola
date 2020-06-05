const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model('Subject', subjectSchema);
