const responseBody = require("../../routes/responseBody");
const Canteen = require("../../models/canteen");
const {
  getToday,
  getDayAfter,
  getStartWeek,
  getEndWeek,
} = require("../dateFunction");

const getAllLunch = (req, res) => {
  return Canteen.find({}, (err, data) => {
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

const getDayLunch = (req, res) => {
  const today = getToday();
  const dayAfter = getDayAfter();

  return Canteen.find({ date: { $gte: today, $lt: dayAfter } }, (err, data) => {
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

const getWeekLunch = (req, res) => {
  const monday = getStartWeek();
  const sunday = getEndWeek();

  return Canteen.find({ date: { $gte: monday, $lte: sunday } }, (err, data) => {
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
  getAllLunch,
  getDayLunch,
  getWeekLunch,
};
