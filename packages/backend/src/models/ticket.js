const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const comment = require("./comment");

const STATUS = ["open", "inProgress", "resolved", "archived"];

const schema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: String,
      enum: ["admin", "superadmin"],
      default: "admin",
      required: true,
    },
    status: {
      type: String,
      enum: STATUS,
      required: true,
      default: "open",
    },
    comments: {
      type: [comment.schema],
      required: true,
      default: [],
    },
  },

  { timestamps: { createdAt: "created_at" }, strict: "throw" }
);

schema.plugin(AutoIncrement, { inc_field: "index" });
module.exports = mongoose.model("Ticket", schema);
