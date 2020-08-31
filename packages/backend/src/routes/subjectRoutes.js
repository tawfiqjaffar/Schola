const express = require('express');
const { check } = require('express-validator');
const { checkFields, authenticateJwt } = require('./middleware');
const { getAllSubjects } = require('../controllers/Subject/subjectGet');
const { createSubject } = require('../controllers/Subject/subjectPost');

const router = express.Router();

router.get(
  '/',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getAllSubjects
);

router.post(
  '/create',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  createSubject
);

module.exports = router;
