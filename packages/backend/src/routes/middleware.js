require('dotenv');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const responseBody = require('./responseBody');

const checkFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(responseBody.responseCode.BADREQ)
      .send(
        responseBody.buildResponseBody(errors, responseBody.responseCode.BADREQ)
      );
  }
  return next();
};

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) {
        return res.status(
          responseBody.responseCode.FORBID,
          responseBody.buildResponseBody(
            { error: 'access level insufficient' },
            responseBody.responseCode.FORBID
          )
        );
      }
      req.user = user;
      return next();
    });
  } else {
    res
      .status(responseBody.responseCode.UNAUTH)
      .send(
        responseBody.buildResponseBody(
          { error: 'invalid username or password' },
          responseBody.responseCode.UNAUTH
        )
      );
  }
};

module.exports = { checkFields, authenticateJwt };
