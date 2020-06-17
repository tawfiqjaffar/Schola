const express = require('express');
const { check } = require('express-validator');
const { checkFields, authenticateJwt } = require('./middleware');
const { getAllUsersAdmin, getMe } = require('../controllers/User/userGet');
const { postCreateUser } = require('../controllers/User/userPost');
const { updateRole } = require('../controllers/User/userPut');
const { getUserAvatar } = require('../controllers/Avatar/avatarGet');
const { updateUserAvatar } = require('../controllers/Avatar/avatarPut');

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

router.get(
  '/avatar',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getUserAvatar
);

router.put(
  '/modifyAvatar',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  updateUserAvatar
);

router.post('/create', checkFields, postCreateUser);

router.put(
  '/role',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  updateRole
);

module.exports = router;
