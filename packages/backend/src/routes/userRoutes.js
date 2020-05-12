const express = require('express');
const { check } = require('express-validator');
const responseBody = require('./responseBody');
const User = require('../models/user');
const { checkFields, authenticateJwt } = require('./middleware');
const { hashPassword } = require('../encryption/hash');

const router = express.Router();

router.get(
  '/',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  (req, res) => {
    const { user } = req;
    console.log(user);

    if (user.role === 'admin') {
      console.log('here');
      User.find({}, (err, users) => {
        if (err) {
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                err,
                responseBody.responseCode.INTSERVERR
              )
            );
        }
        return res
          .status(responseBody.responseCode.SUCCESS)
          .send(
            responseBody.buildResponseBody(
              users,
              responseBody.responseCode.SUCCESS
            )
          );
      });
    } else {
      User.findOne({ _id: user._id }, (err, found) => {
        if (err) {
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                err,
                responseBody.responseCode.INTSERVERR
              )
            );
        }
        return res
          .status(responseBody.responseCode.SUCCESS)
          .send(
            responseBody.buildResponseBody(
              found,
              responseBody.responseCode.SUCCESS
            )
          );
      });
    }
  }
);

router.get(
  '/me',
  [check('authorization', 'you must provide a bearer access token').notEmpty()],
  checkFields,
  authenticateJwt,
  (req, res) => {
    const { user } = req;
    User.findOne({ _id: user._id }, (err, found) => {
      if (err) {
        return res
          .status(responseBody.responseCode.INTSERVERR)
          .send(
            responseBody.buildResponseBody(
              err,
              responseBody.responseCode.INTSERVERR
            )
          );
      }
      return res
        .status(responseBody.responseCode.SUCCESS)
        .send(
          responseBody.buildResponseBody(
            found,
            responseBody.responseCode.SUCCESS
          )
        );
    });
  }
);

router.get('/find-email-bool', (req, res) => {
  const { email } = req.headers;

  User.findOne({ email }, (err, found) => {
    if (err) {
      return res
        .status(responseBody.responseCode.INTSERVERR)
        .send(
          responseBody.buildResponseBody(
            err,
            responseBody.responseCode.INTSERVERR
          )
        );
    }
    if (!found) {
      return res
        .status(200)
        .send(
          responseBody.buildResponseBody(
            false,
            responseBody.responseCode.SUCCESS
          )
        );
    }
    return res
      .status(200)
      .send(
        responseBody.buildResponseBody(true, responseBody.responseCode.SUCCESS)
      );
  });
});

router.post('/create', checkFields, async (req, res) => {
  const {
    username,
    password,
    firstname,
    lastname,
    email,
    dateofbirth,
    role,
  } = req.body;

  const createUser = async () => {
    const hashed = await hashPassword(password);
    const newUser = new User({
      userName: username,
      password: hashed,
      firstName: firstname,
      lastName: lastname,
      email,
      dateOfBirth: dateofbirth,
      role,
    });
    newUser.save((err, user) => {
      if (err) {
        return res
          .status(responseBody.responseCode.INTSERVERR)
          .send(
            responseBody.buildResponseBody(
              err,
              responseBody.responseCode.INTSERVERR
            )
          );
      }
      return res
        .status(responseBody.responseCode.SUCCESS)
        .send(responseBody.buildResponseBody(user));
    });
  };
  User.find({ $or: [{ userName: username }, { email }] }, async (err, user) => {
    if (err || user.length > 0) {
      const conflicted = user[0].userName === username ? username : email;
      return res.status(responseBody.responseCode.CONFLICT).send(
        responseBody.buildResponseBody(
          {
            error: `${conflicted} is already in use`,
          },
          responseBody.responseCode.CONFLICT
        )
      );
    }
    const newUser = await createUser();

    return newUser;
  });
});

router.post('/create-google', checkFields, async (req, res) => {
  const {
    username,
    password,
    firstname,
    lastname,
    email,
    dateofbirth,
    role,
  } = req.body;

  const createUser = async () => {
    const hashed = await hashPassword(password);
    const newUser = new User({
      userName: username,
      password: hashed,
      firstName: firstname,
      lastName: lastname,
      email,
      dateOfBirth: dateofbirth,
      role,
      accountType: 'google',
    });
    newUser.save((err, user) => {
      if (err) {
        return res
          .status(responseBody.responseCode.INTSERVERR)
          .send(
            responseBody.buildResponseBody(
              err,
              responseBody.responseCode.INTSERVERR
            )
          );
      }
      return res
        .status(responseBody.responseCode.SUCCESS)
        .send(responseBody.buildResponseBody(user));
    });
  };
  User.find({ $or: [{ userName: username }, { email }] }, async (err, user) => {
    if (err || user.length > 0) {
      const conflicted = user[0].userName === username ? username : email;
      return res.status(responseBody.responseCode.CONFLICT).send(
        responseBody.buildResponseBody(
          {
            error: `${conflicted} is already in use`,
          },
          responseBody.responseCode.CONFLICT
        )
      );
    }
    const newUser = await createUser();

    return newUser;
  });
});

router.put('/role/:id', (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  User.findOneAndUpdate({ _id: id }, { role }, { new: true }, (err, result) => {
    if (err) {
      return res
        .status(responseBody.responseCode.INTSERVERR)
        .send(
          responseBody.buildResponseBody(
            err,
            responseBody.responseCode.INTSERVERR
          )
        );
    }
    return res
      .status(200)
      .send(
        responseBody.buildResponseBody(
          result,
          responseBody.responseCode.SUCCESS
        )
      );
  });
});

module.exports = router;
