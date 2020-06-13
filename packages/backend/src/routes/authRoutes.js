require('dotenv');
const express = require('express');
const { check } = require('express-validator');
const { checkFields } = require('./middleware');
const { postLoginUser } = require('../controllers/Auth/authPost');

const router = express.Router();
router.post(
  '/login',
  [
    check('email', "field 'email' cannot be empty").notEmpty(),
    check('password', "field 'password' cannot be empty").notEmpty(),
  ],
  checkFields,
  postLoginUser
);

module.exports = router;
