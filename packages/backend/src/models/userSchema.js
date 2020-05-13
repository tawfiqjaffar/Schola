const mongoose = require('mongoose');
const passwordHash = require('password-hash');
const jwt = require('jwt-simple');
const config = require('../../config/config');

const userSchema = new mongoose.Schema({
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

userSchema.methods = {
  authenticate: function(password) {
    return passwordHash.verify(password, this.password);
  },
  getToken: function() {
    return jwt.encode(this, config.secret);
  }
}

module.exports = mongoose.model('User', userSchema);
