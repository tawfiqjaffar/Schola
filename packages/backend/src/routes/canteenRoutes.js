const express = require("express");
const { check } = require("express-validator");
const { checkFields, authenticateJwt } = require("./middleware");
const {
  getAllLunch,
  getDayLunch,
  getWeekLunch,
} = require("../controllers/Canteen/canteenGet");
const { createLunch } = require("../controllers/Canteen/canteenPost");
const { deleteLunch } = require("../controllers/Canteen/canteenDelete");
const {
  updateDateLunch,
  updateStarterLunch,
  updateMealLunch,
  updateDessertLunch,
} = require("../controllers/Canteen/canteenPut");

const router = express.Router();

router.get(
  "/",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getAllLunch
);

router.get(
  "/dayLunch",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getDayLunch
);

router.get(
  "/weekLunch",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getWeekLunch
);

router.post(
  "/createLunch",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  createLunch
);

router.delete(
  "/deleteLunch",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  deleteLunch
);

router.put(
  "/updateDate",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  updateDateLunch
);

router.put(
  "/updateStarter",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  updateStarterLunch
);

router.put(
  "/updateMeal",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  updateMealLunch
);

router.put(
  "/updateDessert",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  updateDessertLunch
);

module.exports = router;
