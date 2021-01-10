const responseBody = require("../../routes/responseBody");
const Subject = require("../../models/subject");

const getAllSubjects = (req, res) => {
  return Subject.find({}, (err, data) => {
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

module.exports = {
  getAllSubjects,
};
