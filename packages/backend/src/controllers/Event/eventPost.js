const Event = require("../../models/event");
const Class = require("../../models/class");
const responseBody = require("../../routes/responseBody");

const postCreateEvent = (req, res) => {
  const newEvent = new Event({
    date: req.body.date,
    event: req.body.event,
    classId: req.body.classId,
  });
  return newEvent.save((err, data) => {
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
      Class.findOneAndUpdate(
        { _id: data.classId },
        { $push: { events: data._id } },
        (error, usr) => {
          if (error) console.log(error + usr);
        }
      );
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
  postCreateEvent,
};
