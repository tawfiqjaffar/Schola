const express = require('express');
const { checkFields} = require('./middleware');

const {
	postCreateGrade,
  } = require('../controllers/Grade/gradePost');

const router = express.Router();

router.post('/create', checkFields, postCreateGrade);

module.exports = router;