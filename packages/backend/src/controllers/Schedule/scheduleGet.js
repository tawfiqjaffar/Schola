const Schedule = require('../../models/schedule');
const responseBody = require('../../routes/responseBody');
const { getToday, getDayAfter } = require('../dateFunction');
const { getStartWeek, getEndWeek } = require('../dateFunction');

const getAllSchedule = (req, res) => {
  return Schedule.find({ usersId: req.user._id }, (err, data) => {
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

const getDaySchedule = (req, res) => {
  const startDay = getToday();
  const endDay = getDayAfter();

  return Schedule.find(
    {
      $and: [
        { usersId: req.user._id },
        { start: { $gte: startDay, $lte: endDay } },
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

const getWeekSchedule = (req, res) => {
  const monday = getStartWeek();
  const sunday = getEndWeek();

  return Schedule.find(
    {
      $and: [
        { usersId: req.user._id },
        { start: { $gte: monday, $lte: sunday } },
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
  getAllSchedule,
  getDaySchedule,
  getWeekSchedule,
};
