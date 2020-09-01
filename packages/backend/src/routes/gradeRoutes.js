const express = require('express');
const { check } = require('express-validator');
const { checkFields, authenticateJwt } = require('./middleware');
const {
  getAllGrade,
  getSubjectGrade,
  postCreateGrade,
} = require('../controllers/Grade/gradeGet');

const router = express.Router();

router.get('/studentGrade', checkFields, getAllGrade);

router.get('/subjectGrade', checkFields, getAllGrade);

router.post('/subjectGrade', checkFields, postCreateGrade);

module.exports = router;
