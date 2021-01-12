const express = require("express");
const { check } = require("express-validator");
const { checkFields, authenticateJwt } = require("./middleware");
const {
  getAllUsersAdmin,
  getMe,
  getNumberAbsence,
  getStatsAbsence,
  sortTeacher,
  sortSubjectTeacher,
} = require("../controllers/User/userGet");
const {
  postCreateUser,
  postSendPasswordResetCode,
  postResetUserPassword,
  postAddAbsence,
} = require("../controllers/User/userPost");
const { updateRole } = require("../controllers/User/userPut");
const {
  getUserAvatar,
  getAllAvatar,
} = require("../controllers/Avatar/avatarGet");
const { updateUserAvatar } = require("../controllers/Avatar/avatarPut");

const router = express.Router();

router.get(
  "/",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getAllUsersAdmin
);

router.get(
  "/me",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getMe
);

router.get(
  "/myAvatar",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getUserAvatar
);

router.get(
  "/allAvatar",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  getAllAvatar
);

router.put(
  "/modifyAvatar",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  updateUserAvatar
);

router.get("/nbAbsence", checkFields, getNumberAbsence);
router.get("/sortTeacher", checkFields, sortTeacher);
router.get("/sortTeacherSub", checkFields, sortSubjectTeacher);

router.get("/statsAbsence", checkFields, getStatsAbsence);

router.post("/create", checkFields, postCreateUser);

router.post("/AddAbsence", checkFields, postAddAbsence);

router.put(
  "/role",
  [check("authorization", "you must provide a bearer access token").notEmpty()],
  checkFields,
  authenticateJwt,
  updateRole
);

router.post(
  "/reset-password-request",
  [check("email", "you must provide an email address").notEmpty()],
  checkFields,
  postSendPasswordResetCode
);

router.post(
  "/reset-password",
  [
    check("email", "you must provide an email address").notEmpty(),
    check("recoveryToken", "you must provide a recovery token").notEmpty(),
    check("password", "you must provide a new password").notEmpty(),
  ],
  checkFields,
  postResetUserPassword
);

module.exports = router;
