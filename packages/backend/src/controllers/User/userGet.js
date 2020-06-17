// get user info

const User = require('../../models/user');
const responseBody = require('../../routes/responseBody');

const getAllUsersAdmin = (req, res) => {
  const { user } = req;
  console.log(user);

  return User.findById(user._id, (error, foundSingle) => {
    if (error) {
      return res
        .status(responseBody.responseCode.NOTFOUND)
        .send(
          responseBody.buildResponseBody(
            error,
            responseBody.responseCode.NOTFOUND
          )
        );
    }
    const { role } = foundSingle;
    if (role === 'admin') {
      return User.find({}, (err, users) => {
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
      return User.findOne({ _id: user._id }, (err, found) => {
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
  });
};

const getMe = (req, res) => {
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
        responseBody.buildResponseBody(found, responseBody.responseCode.SUCCESS)
      );
  });
};

module.exports = {
  getAllUsersAdmin,
  getMe,
};
