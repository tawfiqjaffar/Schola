// const express = require('express');
// const { check } = require('express-validator');
// const { checkFields, authenticateJwt } = require('./middleware');
// const {
//   getAllStudentGrades,
//   getReadableGrades,
//   getSubjectStudentGrades,
//   getReadableSubjectGrades,
//   getUserAverage,
//   getUserAverageBySubjectId,
//   groupBySubject,
// } = require('../controllers/Grade/gradeGet');

// const { createGrade } = require('../controllers/Grade/gradePost');

// const { updateGrade } = require('../controllers/Grade/gradePut');

// const { deleteGrade } = require('../controllers/Grade/gradeDelete');

// const router = express.Router();

// router.get(
//   '/allStudentGrades',
//   [check('authorization', 'you must provide a bearer access token').notEmpty()],
//   checkFields,
//   authenticateJwt,
//   getAllStudentGrades
// );

// router.get(
//   '/readableGrades',
//   [check('authorization', 'you must provide a bearer access token').notEmpty()],
//   checkFields,
//   authenticateJwt,
//   getReadableGrades
// );

// router.get(
//   '/subjectStudentGrades',
//   [check('authorization', 'you must provide a bearer access token').notEmpty()],
//   checkFields,
//   authenticateJwt,
//   getSubjectStudentGrades
// );

// router.get(
//   '/readableSubjectGrades',
//   [check('authorization', 'you must provide a bearer access token').notEmpty()],
//   checkFields,
//   authenticateJwt,
//   getReadableSubjectGrades
// );

// router.post(
//   '/create',
//   [check('authorization', 'you must provide a bearer access token').notEmpty()],
//   checkFields,
//   authenticateJwt,
//   createGrade
// );

// router.get(
//   '/stats/average/student',
//   [check('authorization', 'you must provide a bearer access token').notEmpty()],
//   checkFields,
//   authenticateJwt,
//   getUserAverage
// );

// router.get(
//   '/stats/average/student/subject',
//   [check('authorization', 'you must provide a bearer access token').notEmpty()],
//   checkFields,
//   authenticateJwt,
//   getUserAverageBySubjectId
// );

// router.get(
//   '/stats/average/student/subject/group',
//   [check('authorization', 'you must provide a bearer access token').notEmpty()],
//   checkFields,
//   authenticateJwt,
//   groupBySubject
// );

// router.put(
//   '/updateGrade',
//   [check('authorization', 'you must provide a bearer access token').notEmpty()],
//   checkFields,
//   authenticateJwt,
//   updateGrade
// );

// router.delete(
//   '/deleteGrade',
//   [check('authorization', 'you must provide a bearer access token').notEmpty()],
//   checkFields,
//   authenticateJwt,
//   deleteGrade
// );

// module.exports = router;
const express = require("express");
const { checkFields } = require("./middleware");

const { postCreateGrade } = require("../controllers/Grade/gradePost");

const router = express.Router();

router.post("/create", checkFields, postCreateGrade);

module.exports = router;
