const express = require("express");
const { checkFields, authenticateJwt } = require("./middleware");

const { postCreateClass } = require("../controllers/Class/classPost");

const { sortStudentClass } = require("../controllers/Class/classGet");

const { deleteClass } = require("../controllers/Class/classDelete");

const router = express.Router();

router.post("/create", checkFields, postCreateClass);

router.get("/sortStudent", checkFields, authenticateJwt, sortStudentClass);

router.delete("/deleteClass", checkFields, deleteClass);

module.exports = router;
