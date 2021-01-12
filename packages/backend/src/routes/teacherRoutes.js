const express = require("express");
const {
  getAllTeachers,
  getTeacherStudents,
  getStudentTeachers,
} = require("../controllers/Teacher/teacherGet");
const { createTeacher } = require("../controllers/Teacher/teacherPost");

const router = express.Router();

router.get("/", getAllTeachers);

router.get("/teacher-students", getTeacherStudents);

router.get("/student-teachers", getStudentTeachers);

router.post("/create", createTeacher);

module.exports = router;
