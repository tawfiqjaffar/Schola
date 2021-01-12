const Avatar = require("../../models/avatar");
const User = require("../../models/user");
const responseBody = require("../../routes/responseBody");

const updateUserAvatar = (req, res) => {
  const { avatarPath } = req.body;

  return Avatar.findOne({ path: avatarPath }, (err, data) => {
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
      return User.updateOne(
        { _id: req.user._id },
        { $set: { avatar: data._id } },
        (error, result) => {
          if (error) {
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
        }
      );
    }
  });
};

module.exports = {
  updateUserAvatar,
};
