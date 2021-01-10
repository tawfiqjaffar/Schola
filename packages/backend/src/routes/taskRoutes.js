const express = require("express");
const { check } = require("express-validator");
const { checkFields, authenticateJwt } = require("./middleware");
const {
  getAllTask,
  getDayTask,
  getWeekTask,
} = require("../controllers/Task/taskGet");
const { createTask } = require("../controllers/Task/taskPost");
const { deleteTask } = require("../controllers/Task/taskDelete");
const { updateTask, updateDateTask } = require("../controllers/Task/taskPut");

const router = express.Router();

router.get(
  "/",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getAllTask
);

router.get(
  "/day",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getDayTask
);

router.get(
  "/week",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getWeekTask
);

router.post(
  "/create",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  createTask
);

router.delete(
  "/delete",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  deleteTask
);

router.put(
  "/update",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  updateTask
);

router.put(
  "/updateDate",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  updateDateTask
);

module.exports = router;
