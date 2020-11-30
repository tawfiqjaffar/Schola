const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
	  classYear : {
		  type: String,
		  required : true
	  },
	  classNumber: {
		  type: Number,
		  required: true
	  },
	absence : [{ type : mongoose.Schema.Types.ObjectId, ref: 'Absence' }],
	studentsId : [{ type : mongoose.Schema.Types.ObjectId, ref: 'User' }],
	teacherId : { type : mongoose.Schema.Types.ObjectId, ref: 'User' },
	events : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event'}]
});

module.exports = mongoose.model('Class', classSchema);
