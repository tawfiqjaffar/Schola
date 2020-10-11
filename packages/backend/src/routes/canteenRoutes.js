const express = require('express');
const { check } = require('express-validator');
const { checkFields, authenticateJwt } = require('./middleware');
const {
  getAllLunch,
  getDayLunch,
  getWeekLunch,
} = require('../controllers/Canteen/canteenGET');

const router = express.Router();

router.get(
  '/',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getAllLunch
);

router.get(
  '/dayLunch',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getDayLunch
);

router.get(
  '/weekLunch',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getWeekLunch
);

module.exports = router;
