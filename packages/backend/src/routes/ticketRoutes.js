const express = require('express');
const { check } = require('express-validator');
const { getAllTickets } = require('../controllers/Ticket/ticketGet');
const { createTicket } = require('../controllers/Ticket/ticketPost');
const { checkFields, authenticateJwt } = require('./middleware');

const router = express.Router();

router.post(
  '/create',
  [
    check(
      'authorization',
      'you must provided a bearer access token'
    ).notEmpty(),
  ],
  checkFields,
  authenticateJwt,
  createTicket
);

router.get(
  '/all',
  [
    check(
      'authorization',
      'you must provided a bearer access token'
    ).notEmpty(),
  ],
  checkFields,
  authenticateJwt,
  getAllTickets
);

module.exports = router;
