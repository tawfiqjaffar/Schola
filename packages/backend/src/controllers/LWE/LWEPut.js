const LWE = require("../../models/LWE");
const responseBody = require("../../routes/responseBody");

const updateLWE = (req, res) => {
  return LWE.updateOne(
    { _id: req.body.LWEId },
    { $set: { question: req.body.question } },
    (error, result) => {
      if (error) {
        return res
          .status(responseBody.responseCode.INTSERVERR)
          .send(
            responseBody.buildResponseBody(
              error,
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
};

module.exports = {
  updateLWE,
};
