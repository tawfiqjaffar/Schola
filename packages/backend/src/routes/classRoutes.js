const express = require("express");
const { checkFields } = require("./middleware");

const { postCreateClass } = require("../controllers/Class/classPost");

const { sortStudentClass } = require("../controllers/Class/classGet");

const { deleteClass } = require("../controllers/Class/classDelete");

const router = express.Router();

router.post("/create", checkFields, postCreateClass);

router.get("/sortStudent", checkFields, sortStudentClass);

router.delete("/deleteClass", checkFields, deleteClass);

module.exports = router;
