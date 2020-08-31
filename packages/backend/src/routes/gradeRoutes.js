const express = require('express');
const { check } = require('express-validator');
const { checkFields, authenticateJwt } = require('./middleware');
const {
  getAllGrade,
  getSubjectGrade,
  getUserAverage,
  getUserAverageBySubjectId,
} = require('../controllers/Grade/gradeGet');

const { createGrade } = require('../controllers/Grade/gradePost');

const router = express.Router();

router.get(
  '/studentGrade',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getAllGrade
);

router.get(
  '/subjectGrade',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getSubjectGrade
);

router.post(
  '/create',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  createGrade
);

router.get(
  '/stats/average/student',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getUserAverage
);

router.get(
  '/stats/average/student/subject',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getUserAverageBySubjectId
);
module.exports = router;
