const User = require("../../models/user");

const responseBody = require("../../routes/responseBody");

const sortStudentClass = (req, res) => {
  User.find(
    { classId: req.headers.classid, role: "student" },
    null,
    { sort: { lastName: req.body.sort } },
    (err, abs) => {
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
          responseBody.buildResponseBody(abs, responseBody.responseCode.SUCCESS)
        );
    }
  );
};
module.exports = {
  sortStudentClass,
};
