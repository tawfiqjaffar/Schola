// request creating some docs in db about user

const User = require('../../models/user');
const responseBody = require('../../routes/responseBody');
const { hashPassword } = require('../../encryption/hash');

const postCreateUser = (req, res) => {
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
};

module.exports = {
  postCreateUser,
};
