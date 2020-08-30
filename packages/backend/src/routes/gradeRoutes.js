const express = require('express');
const { check } = require('express-validator');
const { checkFields, authenticateJwt } = require('./middleware');
const {
  getAllGrade,
  getSubjectGrade,
} = require('../controllers/Grade/gradeGet');

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

module.exports = router;
