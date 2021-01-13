const express = require("express");
const { check } = require("express-validator");
const { checkFields, authenticateJwt } = require("./middleware");
const {
  getAllLWE,
  getSubjectLevelLWE,
  getStudentLWE,
  getStudentSubjectLWE,
} = require("../controllers/LWE/LWEGet");

const router = express.Router();

router.get(
  "/",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getAllLWE
);

router.get(
  "/subjectLevel",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getSubjectLevelLWE
);

router.get(
  "/student",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getStudentLWE
);

router.get(
  "/student/subject",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getStudentSubjectLWE
);

module.exports = router;
