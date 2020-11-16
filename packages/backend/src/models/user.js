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
  avatar: {
    type: mongoose.Schema.Types.ObjectId,
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'parent', 'viesco', 'admin', 'superadmin'],
    default: 'student',
  },
  accountType: {
    type: String,
    enum: ['basic', 'google'],
    default: 'basic',
  },
  passwordRecoveryToken: {
    type: String,
    default: '',
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: false,
    default: null,
  },
});

module.exports = mongoose.model('User', schema);
