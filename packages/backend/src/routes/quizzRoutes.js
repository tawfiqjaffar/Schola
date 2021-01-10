const express = require('express');
const { Create } = require('../controllers/Quizz/Create');
const { getAllQuiz } = require("../controllers/Quizz/getAllQuiz")
const { getQuiz } = require("../controllers/Quizz/getQuiz")
const router = express.Router();

router.post('/', Create);
router.get('/', getAllQuiz);
router.get('/:id', getQuiz);

module.exports = router;
