const Grade = require("../../models/grade");
const responseBody = require("../../routes/responseBody");

const deleteGrade = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    return Grade.deleteOne({ _id: req.body.id }, (err, data) => {
      if (err) {
        console.log(err);
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
          "You do not have the access right to perform such a modification",
          responseBody.responseCode.FORBID
        )
      );
  }
};

module.exports = {
  deleteGrade,
};
