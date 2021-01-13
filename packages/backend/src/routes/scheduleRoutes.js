const express = require("express");
const { check } = require("express-validator");
const { checkFields, authenticateJwt } = require("./middleware");
const {
  getAllSchedule,
  getDaySchedule,
  getWeekSchedule,
} = require("../controllers/Schedule/scheduleGet");
const { createSchedule } = require("../controllers/Schedule/schedulePost");
const { deleteSchedule } = require("../controllers/Schedule/scheduleDelete");
const { updateDateSchedule } = require("../controllers/Schedule/schedulePut");

const router = express.Router();

router.get(
  "/",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getAllSchedule
);

router.get(
  "/day",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getDaySchedule
);

router.get(
  "/week",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getWeekSchedule
);

router.post(
  "/create",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  createSchedule
);

router.delete(
  "/delete",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  deleteSchedule
);

router.put(
  "/updateDate",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  updateDateSchedule
);

module.exports = router;
