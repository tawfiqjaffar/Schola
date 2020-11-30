const mongoose = require('mongoose');

const absenceSchema = new mongoose.Schema({
	date: {
		type: String,
		required: true
	  },
	hour: {
		type: String,
		required: true
	},
	typeAbs: {
		type: String,
		enum: ['absence', 'late'],
		required: true
	},
	justified: {
		type: String,
		required: true
	},
	studentId : { type : mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Absence', absenceSchema);