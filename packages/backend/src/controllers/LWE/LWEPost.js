const mongoose = require("mongoose");

const LWE = require("../../models/LWE");
const responseBody = require("../../routes/responseBody");

const createLWE = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    delete req.body._id;

    const { name, subjectId, classLevel, serieNumber, question } = req.body;

    const LWEDoc = new LWE({
      name,
      subjectId: mongoose.Types.ObjectId(subjectId),
      classLevel,
      serieNumber,
      question,
    });

    return LWEDoc.save((err, data) => {
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
          "You do not have the access right to perform such a modification",
          responseBody.responseCode.FORBID
        )
      );
  }
};

module.exports = {
  createLWE,
};
