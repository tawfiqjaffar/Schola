const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket',
      required: true,
    },
  },
  { timestamps: { createdAt: 'created_at' }, strict: 'throw' }
);

module.exports = mongoose.model('Comment', schema);
