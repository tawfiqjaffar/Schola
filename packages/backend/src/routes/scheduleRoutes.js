const express = require('express');
const { check } = require('express-validator');
const { checkFields, authenticateJwt } = require('./middleware');
const {
  getAllSchedule,
  getDaySchedule,
  getWeekSchedule,
} = require('../controllers/Schedule/scheduleGet');

const router = express.Router();

router.get(
  '/',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getAllSchedule
);

router.get(
  '/day',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getDaySchedule
);

router.get(
  '/week',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  getWeekSchedule
);

module.exports = router;
