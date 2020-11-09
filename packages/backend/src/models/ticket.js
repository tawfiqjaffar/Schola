const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    creator: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    subject: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: String,
      enum: ['admin', 'superadmin'],
      default: 'admin',
    },
    school: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
  },
  { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model('Ticket', schema);
