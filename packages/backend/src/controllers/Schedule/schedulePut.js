const Schedule = require("../../models/schedule");
const responseBody = require("../../routes/responseBody");

const updateDateSchedule = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    const { body } = req;
    const newStart = req.body.start;
    const newEnd = req.body.end;

    return Schedule.updateOne(
      { _id: body.id },
      { $set: { start: newStart, end: newEnd } },
      (err, data) => {
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
      }
    );
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
  updateDateSchedule,
};
