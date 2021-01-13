const Avatar = require("../../models/avatar");
const User = require("../../models/user");
const responseBody = require("../../routes/responseBody");

const getAllAvatar = (req, res) => {
  return Avatar.find({}, (err, data) => {
    if (err) {
      return res
        .status(responseBody.responseCode.INTSERVERR)
        .send(
          responseBody.buildResponseBody(
            err,
            responseBody.responseCode.INTSERVERR
          )
        );
    } else {
      return res
        .status(responseBody.responseCode.SUCCESS)
        .send(
          responseBody.buildResponseBody(
            data,
            responseBody.responseCode.SUCCESS
          )
        );
    }
  });
};

const getUserAvatar = (req, res) => {
  const { user } = req;

  return User.findOne({ _id: user._id }, (err, data) => {
    if (err) {
      return res
        .status(responseBody.responseCode.INTSERVERR)
        .send(
          responseBody.buildResponseBody(
            err,
            responseBody.responseCode.INTSERVERR
          )
        );
    } else {
      return Avatar.findOne({ _id: data.avatar }, (error, result) => {
        if (error) {
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                error,
                responseBody.responseCode.INTSERVERR
              )
            );
        } else {
          return res
            .status(responseBody.responseCode.SUCCESS)
            .send(
              responseBody.buildResponseBody(
                result,
                responseBody.responseCode.SUCCESS
              )
            );
        }
      });
    }
  });
};

module.exports = {
  getUserAvatar,
  getAllAvatar,
};
