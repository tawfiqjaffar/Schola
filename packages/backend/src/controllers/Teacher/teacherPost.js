/* eslint-disable no-unused-vars */
const mongoose = require("mongoose");
const Teacher = require("../../models/teacher");
const User = require("../../models/user");

const createTeacher = (req, res) => {
  const { studentId, teacherId } = req.body;

  return User.findById(
    mongoose.Types.ObjectId(studentId),
    (errStudent, _student) => {
      if (errStudent) {
        return res.status(404).send(errStudent);
      } else {
        return User.findById(
          mongoose.Types.ObjectId(teacherId),
          (errTeacher, _teacher) => {
            if (errTeacher) {
              return res.status(404).send(errTeacher);
            } else {
              const newTeacher = new Teacher({
                teacherId: mongoose.Types.ObjectId(teacherId),
                studentId: mongoose.Types.ObjectId(studentId),
              });
              return newTeacher.save((errSave, saved) => {
                if (errSave) {
                  return res.status(500).send(errSave);
                } else {
                  return res.status(200).send(saved);
                }
              });
            }
          }
        );
      }
    }
  );
};

module.exports = { createTeacher };
