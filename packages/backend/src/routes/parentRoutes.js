const express = require("express");
const {
  getAllParents,
  getParentsChildren,
  getChildsParents,
} = require("../controllers/Parent/parentGet");

const { createParent } = require("../controllers/Parent/parentPost");

const router = express.Router();

router.get("/", getAllParents);

router.get("/parent-children", getParentsChildren);

router.get("/student-parents", getChildsParents);

router.post("/create", createParent);

module.exports = router;
