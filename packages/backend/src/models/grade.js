const mongoose = require('mongoose');

// const gradeSchema = new mongoose.Schema({
//   publisherId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//   },
//   studentId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//   },
//   subjectId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//   },
//   grade: {
//     type: Number,
//     required: true,
//   },
//   label: {
//     type: String,
//     required: true,
//   },
//   readable: {
//     type: Boolean,
//     required: true,
//   },
// });

// module.exports = mongoose.model('Grade', gradeSchema);



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
