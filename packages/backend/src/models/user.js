const mongoose = require("mongoose");

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
  classId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  dateOfBirth: {
    type: Date,
  },
  avatar: {
    type: mongoose.Schema.Types.ObjectId,
  },
  role: {
    type: String,
    enum: ["student", "teacher", "parent", "viesco", "admin", "superadmin"],
    default: "student",
  },
  absence: [{ type: mongoose.Schema.Types.ObjectId, ref: "Absence" }],
  grade: [{ type: mongoose.Schema.Types.ObjectId, ref: "Grade" }],
  nextMail: {
    type: Number,
  },
  nextMailGrade: {
    type: Number,
  },
  accountType: {
    type: String,
    enum: ["basic", "google"],
    default: "basic",
  },
  passwordRecoveryToken: {
    type: String,
    default: "",
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: false,
    default: null,
  },
});

module.exports = mongoose.model("User", schema);
