const responseBody = require("../../routes/responseBody");
const joursferies = require("../../joursferies");
const Event = require("../../models/event");
const Class = require("../../models/class");

const getHolidayList = (req, res) => {
  return res
    .status(responseBody.responseCode.SUCCESS)
    .send(
      responseBody.buildResponseBody(
        joursferies.JoursFeries(req.body.year),
        responseBody.responseCode.SUCCESS
      )
    );
};

const getEventsClass = (req, res) => {
  Class.findOne({ _id: req.body.classId }, (error, cls) => {
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
    Event.find({ _id: cls.events }, (err, abs) => {
      if (err) {
        return res
          .status(responseBody.responseCode.INTSERVERR)
          .send(
            responseBody.buildResponseBody(
              err,
              responseBody.responseCode.INTSERVERR
            )
          );
      }
      return res
        .status(responseBody.responseCode.SUCCESS)
        .send(
          responseBody.buildResponseBody(abs, responseBody.responseCode.SUCCESS)
        );
    });
  });
};

module.exports = {
  getHolidayList,
  getEventsClass,
};
