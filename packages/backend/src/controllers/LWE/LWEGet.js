const LWE = require("../../models/LWE");
const responseBody = require("../../routes/responseBody");

const getAllLWE = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    return LWE.find({}, (err, data) => {
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
  } else {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          "You do not have the access right to get these informations",
          responseBody.responseCode.FORBID
        )
      );
  }
};

module.exports = {
  getAllLWE,
};
