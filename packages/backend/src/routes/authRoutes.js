require('dotenv');
const express = require('express');
const { check } = require('express-validator');
const jwt = require('jsonwebtoken');
const responseBody = require('./responseBody');
const userSchema = require('../models/user');
const { checkHash } = require('../encryption/hash');
const { checkFields } = require('./middleware');

const router = express.Router();
router.post(
  '/login',
  [
    check('email', "field 'email' cannot be empty").notEmpty(),
    check('password', "field 'password' cannot be empty").notEmpty(),
  ],
  checkFields,
  (req, res) => {
    const { email, password } = req.body;
    userSchema.findOne({ email }, async (err, user) => {
      if (err || !user) {
        return res
          .status(responseBody.responseCode.UNAUTH)
          .send(
            responseBody.buildResponseBody(
              err || `invalid username or password`,
              responseBody.responseCode.UNAUTH
            )
          );
      }
      const hasMatched = await checkHash(password, user.password);
      if (!hasMatched) {
        return res
          .status(responseBody.responseCode.UNAUTH)
          .send(
            responseBody.buildResponseBody(
              'invalid username or password',
              responseBody.responseCode.UNAUTH
            )
          );
      }
      const accessToken = jwt.sign(
        {
          email,
          userName: user.userName,
          role: user.role,
          _id: user._id,
        },
        process.env.SECRET
      );
      return res.status(responseBody.responseCode.SUCCESS).send(
        responseBody.buildResponseBody({
          accessToken,
        })
      );
    });
  }
);

module.exports = router;
