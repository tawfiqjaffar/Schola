const express = require("express");
const { checkFields } = require("./middleware");

const { postCreateEvent } = require("../controllers/Event/eventPost");

const { deleteEvent } = require("../controllers/Event/eventDelete");

const {
	getPublicHolidayList,
	  getHolidayList,
	  getEventsClass,
	} = require('../controllers/Event/eventGet');

const router = express.Router();

router.post("/create", checkFields, postCreateEvent);

router.get('/PublicHolidayList', checkFields, getPublicHolidayList);
router.get('/holidayList', checkFields, getHolidayList);
router.get('/classEvents', checkFields, getEventsClass);

router.delete("/deleteEvent", checkFields, deleteEvent);

module.exports = router;
