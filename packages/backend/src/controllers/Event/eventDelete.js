const Event = require("../../models/event");

const Class = require("../../models/class");
const responseBody = require("../../routes/responseBody");

const deleteEvent = (req, res) => {
  return Event.findOne({ _id: req.body.eventId }, (error, evt) => {
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
    return Class.findOneAndUpdate(
      { _id: evt.classId },
      { $pull: { events: evt._id } },
      (err, usr) => {
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
          console.log(usr);
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
