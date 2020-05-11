const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'parent'],
    default: 'student',
  },
  accountType: {
    type: String,
    enum: ['basic', 'google'],
    default: 'basic',
  },
});

module.exports = mongoose.model('User', schema);
