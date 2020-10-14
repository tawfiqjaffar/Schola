const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
  parentId: { type: mongoose.Schema.Types.ObjectId, required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model('Parent', parentSchema);
