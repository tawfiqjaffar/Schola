const FIGE = require("../../models/FIGE");
const responseBody = require("../../routes/responseBody");

const updateFIGE = (req, res) => {
  return FIGE.updateOne(
    { _id: req.body.figeId },
    { $set: { gapFillText: req.body.gapFillText } },
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
  updateFIGE,
};
