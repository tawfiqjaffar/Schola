const express = require('express');
const { check } = require('express-validator');
const { checkFields, authenticateJwt } = require('./middleware');
const { getAllTasks } = require('../controllers/Task/taskGet');

const router = express.Router();

router.get(
  '/',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  getAllTasks
);

module.exports = router;
