const express = require('express');
const { Create } = require('../controllers/Quizz/Create');

const router = express.Router();

router.post('/', Create);

module.exports = router;
