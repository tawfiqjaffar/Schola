const express = require('express');
const { check } = require('express-validator');
const { checkFields, authenticateJwt } = require('./middleware');
const { getAllGrade } = require('../controllers/Grade/gradeGet');

const router = express.Router();

router.get(
  '/studentGrade',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getAllGrade
);

module.exports = router;
