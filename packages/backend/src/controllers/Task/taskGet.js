const Task = require("../../models/task");
const responseBody = require("../../routes/responseBody");
const {
  getToday,
  getDayAfter,
  getStartWeek,
  getEndWeek,
} = require("../dateFunction");

const getAllTask = (req, res) => {
  return Task.find({ usersId: req.user._id }, (err, data) => {
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

const getDayTask = (req, res) => {
  const today = getToday();
  const dayAfter = getDayAfter();

  return Task.find(
    {
      $and: [
        { usersId: req.user._id },
        { dueDate: { $gte: today, $lt: dayAfter } },
      ],
    },
    (err, data) => {
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
    }
  );
};

const getWeekTask = (req, res) => {
  const startWeek = getStartWeek();
  const endWeek = getEndWeek();

  return Task.find(
    {
      $and: [
        { usersId: req.user._id },
        { dueDate: { $gt: startWeek, $lt: endWeek } },
      ],
    },
    (err, data) => {
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
    }
  );
};

module.exports = {
  getAllTask,
  getDayTask,
  getWeekTask,
};
