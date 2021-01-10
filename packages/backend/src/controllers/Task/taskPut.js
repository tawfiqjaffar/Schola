const Task = require("../../models/task");
const responseBody = require("../../routes/responseBody");

const updateTask = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    const { body } = req;
    const newLabel = req.body.label;

    return Task.updateOne(
      { _id: body.id },
      { $set: { label: newLabel } },
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

const updateDateTask = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    const { body } = req;
    const newDueDate = req.body.dueDate;

    return Task.updateOne(
      { _id: body.id },
      { $set: { dueDate: newDueDate } },
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
  updateTask,
  updateDateTask,
};
