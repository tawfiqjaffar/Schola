const mongoose = require('mongoose');

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
