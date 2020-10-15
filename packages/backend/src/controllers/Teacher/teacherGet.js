const mongoose = require('mongoose');
const Teacher = require('../../models/teacher');

const getAllTeachers = (req, res) => {
  return Teacher.find({}, (err, docs) => {
    return res.status(200).send(docs);
  });
};

const getTeacherStudents = (req, res) => {
  const { teacherId } = req.body;
  return Teacher.find(
    { teacherId: mongoose.Types.ObjectId(teacherId) },
    (err, students) => {
      if (err) {
        return res.status(404).send(err);
      } else {
        return res.status(200).send(students);
      }
    }
  );
};

const getStudentTeachers = (req, res) => {
  const { studentId } = req.body;
  return Teacher.find(
    { studentId: mongoose.Types.ObjectId(studentId) },
    (err, teachers) => {
      if (err) {
        return res.status(404).send(err);
      } else {
        return res.status(200).send(teachers);
      }
    }
  );
};

module.exports = {
  getAllTeachers,
  getTeacherStudents,
  getStudentTeachers,
};
