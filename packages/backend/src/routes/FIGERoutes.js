const express = require("express");
const { check } = require("express-validator");
const { checkFields, authenticateJwt } = require("./middleware");
const {
  getAllFIGE,
  getSubjectLevelFIGE,
  getStudentFIGE,
  getStudentSubjectFIGE,
} = require("../controllers/FIGE/FIGEGet");

const { createFIGE } = require("../controllers/FIGE/FIGEPost");

const { updateFIGE } = require("../controllers/FIGE/FIGEPut");

const { deleteFIGE } = require("../controllers/FIGE/FIGEDelete");

const router = express.Router();

router.get(
  "/",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getAllFIGE
);

router.get(
  "/subjectLevel",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getSubjectLevelFIGE
);

router.get(
  "/student",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getStudentFIGE
);

router.get(
  "/student/subject",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getStudentSubjectFIGE
);

router.post(
  "/create",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  createFIGE
);

router.put(
  "/update",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  updateFIGE
);

router.delete(
  "/delete",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  deleteFIGE
);

module.exports = router;
