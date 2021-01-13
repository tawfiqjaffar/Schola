const express = require("express");
const { check } = require("express-validator");
const { checkFields, authenticateJwt } = require("./middleware");
const {
  getAllLWE,
  getSubjectLevelLWE,
  getStudentLWE,
  getStudentSubjectLWE,
} = require("../controllers/LWE/LWEGet");

const { createLWE } = require("../controllers/LWE/LWEPost");

const { updateLWE } = require("../controllers/LWE/LWEPut");

const { deleteLWE } = require("../controllers/LWE/LWEDelete");

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

router.post(
  "/create",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  createLWE
);

router.put(
  "/update",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  updateLWE
);

router.delete(
  "/delete",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  deleteLWE
);

module.exports = router;
