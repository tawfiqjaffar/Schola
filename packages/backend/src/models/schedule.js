const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  class: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Schedule', scheduleSchema);
