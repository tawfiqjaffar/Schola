const express = require('express');
const { check } = require('express-validator');
const { checkFields, authenticateJwt } = require('./middleware');
const {
  getAllExercices,
  getSubjectExercices,
  getLevelExercices,
  getSubjectLevelExercices,
} = require('../controllers/Exercice/exerciceGet');

const { createExercice } = require('../controllers/Exercice/exercicePost');

const router = express.Router();

router.get(
  '/all',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getAllExercices
);

router.get(
  '/subject',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getSubjectExercices
);

router.get(
  '/level',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getLevelExercices
);

router.get(
  '/subjectLevel',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getSubjectLevelExercices
);

router.post(
  '/create',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  createExercice
);

module.exports = router;
