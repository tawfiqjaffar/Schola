const mongoose = require("mongoose");

const FIGE = require("../../models/FIGE");
const responseBody = require("../../routes/responseBody");

const createFIGE = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    delete req.body._id;

    const {
      name,
      subjectId,
      classLevel,
      serieNumber,
      question,
      gapFillText,
    } = req.body;

    const FIGEDoc = new FIGE({
      name,
      subjectId: mongoose.Types.ObjectId(subjectId),
      classLevel,
      serieNumber,
      question,
      gapFillText,
    });

    return FIGEDoc.save((err, data) => {
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
  createFIGE,
};
