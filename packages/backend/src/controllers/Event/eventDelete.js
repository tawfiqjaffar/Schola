const Event = require("../../models/event");

const Class = require("../../models/class");
const responseBody = require("../../routes/responseBody");

const deleteEvent = (req, res) => {
  Event.findOne({ _id: req.body.eventId }, (error, evt) => {
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
    Class.findOneAndUpdate(
      { _id: evt.classId },
      { $pull: { events: evt._id } },
      (err, usr) => {
        if (err);
        else {
          return Event.deleteOne({ _id: req.body.eventId }, (erre, data) => {
            if (erre) {
              console.log(err);
              return res
                .status(responseBody.responseCode.INTSERVERR)
                .send(
                  responseBody.buildResponseBody(
                    erre,
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
        }
      }
    );
  });
};

module.exports = {
  deleteEvent,
};
