const express = require("express");
const { check } = require("express-validator");
const {
  getAllTickets,
  getSingleTicket,
} = require("../controllers/Ticket/ticketGet");
const { createTicket } = require("../controllers/Ticket/ticketPost");
const {
  updateTicketStatus,
  addCommentToTicket,
} = require("../controllers/Ticket/ticketUpdate");
const { checkFields, authenticateJwt } = require("./middleware");

const router = express.Router();

router.post(
  "/create",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  createTicket
);

router.get(
  "/all",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getAllTickets
);

router.post(
  "/update",
  [
    check(
      "authorization",
      "you must provided a bearer access token"
    ).notEmpty(),
    check("ticketId", "you must provide a valid ticket id").notEmpty(),
    check(
      "status",
      'you must provide a status of value "open", "resolved" or "inProgress"'
    ).notEmpty(),
  ],
  checkFields,
  authenticateJwt,
  updateTicketStatus
);

router.get(
  "/:id",
  [
    check(
      "authorization",
      "you must provided a bearer access token"
    ).notEmpty(),
  ],
  checkFields,
  authenticateJwt,
  getSingleTicket
);

router.post(
  "/comment",
  [
    check("authorization", "you must provide a bearer access token").notEmpty(),
    check("ticketId", "you must provide a valid ticket ID").notEmpty(),
    check("content", "you must provide content").notEmpty(),
  ],
  checkFields,
  authenticateJwt,
  addCommentToTicket
);

module.exports = router;
