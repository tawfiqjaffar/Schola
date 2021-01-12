const express = require('express');
const { check } = require('express-validator');
const { checkFields, authenticateJwt } = require('./middleware');
const {
  getAllMCQ,
  getSubjectMCQ,
  getLevelMCQ,
  getSubjectLevelMCQ,
  getStudentMCQ,
  getStudentSubjectMCQ,
} = require('../controllers/MCQ/MCQGet');

const { createMCQ } = require('../controllers/MCQ/MCQPost');

const { deleteMCQ } = require('../controllers/MCQ/MCQDelete');

const router = express.Router();

router.get(
  '/all',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getAllMCQ
);

router.get(
  '/subject',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getSubjectMCQ
);

router.get(
  '/level',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getLevelMCQ
);

router.get(
  '/subjectLevel',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getSubjectLevelMCQ
);

router.get(
  '/student/all',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getStudentMCQ
);

router.get(
  '/student/subject',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getStudentSubjectMCQ
);

router.post(
  '/create',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  createMCQ
);

router.delete(
  '/delete',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  deleteMCQ
);

module.exports = router;
