const express = require('express');
const { check } = require('express-validator');
const { checkFields, authenticateJwt } = require('./middleware');
const { getAllUsersAdmin, getMe } = require('../controllers/User/userGet');
const {
  postCreateUser,
  postSendPasswordResetCode,
} = require('../controllers/User/userPost');
const { updateRole } = require('../controllers/User/userPut');

const router = express.Router();

router.get(
  '/',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getAllUsersAdmin
);

router.get(
  '/me',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getMe
);

router.post('/create', checkFields, postCreateUser);

router.put(
  '/role',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  updateRole
);

router.post(
  '/reset-password-request',
  [check('email', 'you must provide an email address').notEmpty()],
  checkFields,
  postSendPasswordResetCode
);

module.exports = router;
