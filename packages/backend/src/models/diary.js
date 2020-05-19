const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
  class: {
    type: String,
    required: true,
  },
  monday: {
    type: String,
  },
});

module.exports = mongoose.model('Diary', diarySchema);
