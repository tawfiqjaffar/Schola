const mongoose = require('mongoose');

<<<<<<< HEAD
const schema = new mongoose.Schema({
  grade: {
	  type: String,
	  required: true,
  },
  subject: {
    type: String,
    required: true,
  },
	studentId : { type : mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Grade', schema);
=======
const gradeSchema = new mongoose.Schema({
  publisherId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  readable: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Grade', gradeSchema);
>>>>>>> 7aa1d856d06c616952b4c501325e079e318ecece
