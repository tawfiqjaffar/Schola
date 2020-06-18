// request creating some docs in db about user
const randstring = require('randomstring');
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
  const { email } = req.body;
  console.log(email);
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
      return res
        .status(responseBody.responseCode.NOTFOUND)
        .send(
          responseBody.buildResponseBody(
            err,
            responseBody.responseCode.NOTFOUND
          )
        );
    } else {
      const key = randstring.generate();
      return mailer(email, `Your verification key: ${key}`, (errMail, info) => {
        if (errMail) {
          console.error(errMail);
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                errMail,
                responseBody.responseCode.INTSERVERR
              )
            );
        } else {
          return User.findByIdAndUpdate(
            { _id: user[0]._id },
            { passwordRecoveryToken: key },
            (errFind, product) => {
              if (errFind) {
                return res
                  .status(responseBody.responseCode.INTSERVERR)
                  .send(
                    responseBody.buildResponseBody(
                      errFind,
                      responseBody.responseCode.INTSERVERR
                    )
                  );
              } else {
                return res
                  .status(responseBody.responseCode.SUCCESS)
                  .send(
                    responseBody.buildResponseBody(
                      { user: product, mail: info },
                      responseBody.responseCode.SUCCESS
                    )
                  );
              }
            }
          );
        }
      });
    }
  });
};

const postResetUserPassword = (req, res) => {
  const { recoveryToken, email, password } = req.body;

  User.findOne({ email }, async (err, found) => {
    if (err) {
      return res
        .status(responseBody.responseCode.INTSERVERR)
        .send(
          responseBody.buildResponseBody(
            err,
            responseBody.responseCode.INTSERVERR
          )
        );
    } else if (!found) {
      return res
        .status(responseBody.responseCode.NOTFOUND)
        .send(
          responseBody.buildResponseBody(
            'not found',
            responseBody.responseCode.NOTFOUND
          )
        );
    } else if (found.passwordRecoveryToken !== recoveryToken) {
      return res
        .status(responseBody.responseCode.FORBID)
        .send(
          responseBody.buildResponseBody(
            'invalid recovery token',
            responseBody.responseCode.FORBID
          )
        );
    } else {
      try {
        const hashed = await hashPassword(password);
        return User.findOneAndUpdate(
          { email },
          {
            password: hashed,
            passwordRecoveryToken: '',
          },
          (errProd, prod) => {
            if (errProd) {
              return res
                .status(responseBody.responseCode.INTSERVERR)
                .send(
                  responseBody.buildResponseBody(
                    errProd,
                    responseBody.responseCode.INTSERVERR
                  )
                );
            } else {
              return res
                .status(responseBody.responseCode.SUCCESS)
                .send(
                  responseBody.buildResponseBody(
                    prod,
                    responseBody.responseCode.SUCCESS
                  )
                );
            }
          }
        );
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
    }
  });
};

module.exports = {
  postCreateUser,
  postSendPasswordResetCode,
  postResetUserPassword,
};
