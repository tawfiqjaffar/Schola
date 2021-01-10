const express = require("express");
const { check } = require("express-validator");
const { checkFields, authenticateJwt } = require("./middleware");
const { getAllSchools } = require("../controllers/School/schoolGet");
const { createSchool } = require("../controllers/School/schoolPost");

const router = express.Router();

router.get(
  "/",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getAllSchools
);

router.post(
  "/create",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  createSchool
);

module.exports = router;
