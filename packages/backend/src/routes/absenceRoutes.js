const express = require("express");
const { checkFields } = require("./middleware");

const {
  getAbsenceStudent,
  getAbsenceClass,
} = require("../controllers/Absence/absenceGet");

const router = express.Router();

router.get("/studentAbsence", checkFields, getAbsenceStudent);
router.get("/classAbsence", checkFields, getAbsenceClass);

module.exports = router;
