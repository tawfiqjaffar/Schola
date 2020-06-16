// request creating some docs in db about user

const User = require('../../models/user');
const responseBody = require('../../routes/responseBody');
const { hashPassword } = require('../../encryption/hash');
const mailer = require('../../config/mailer');

const postCreateUser = (req, res) => {
  const { password, firstname, lastname, email, dateofbirth, role } = req.body;

  const createUser = async () => {
    let newUser;
    try {
      const hashed = await hashPassword(password);
      newUser = new User({
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
    } catch (bcryptErr) {
      return res
        .status(responseBody.responseCode.INTSERVERR)
        .send(
          responseBody.buildResponseBody(
            bcryptErr,
            responseBody.responseCode.INTSERVERR
          )
        );
    }
    return newUser;
  };
  User.find({ $or: [{ email }] }, async (err, user) => {
    if (err || user.length > 0) {
      const conflicted = email;
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
};

const postSendPasswordResetCode = (req, res) => {
  const { email } = req;
  User.find({ email }, (err, user) => {
    if (err) {
      return res
        .status(responseBody.responseCode.INTSERVERR)
        .send(
          responseBody.buildResponseBody(
            err,
            responseBody.responseCode.INTSERVERR
          )
        );
    } else if (user.length === 0) {
      console.log(user);
      return res
        .status(responseBody.responseCode.NOTFOUND)
        .send(
          responseBody.buildResponseBody(
            err,
            responseBody.responseCode.NOTFOUND
          )
        );
    } else {
      const mailRes = mailer(email, 123);
      console.log(mailRes);
      return res
        .status(responseBody.responseCode.SUCCESS)
        .send(
          responseBody.buildResponseBody(
            'sent mail',
            responseBody.responseCode.SUCCESS
          )
        );
    }
  });
};

module.exports = {
  postCreateUser,
  postSendPasswordResetCode,
};
