const axios = require("axios");
const responseBody = require("../../routes/responseBody");
const joursferies = require("../../joursferies");
const Event = require("../../models/event");
const Class = require("../../models/class");

const getHolidayList = async (req, res) => {
  try {
    const resp = await axios.get(
      "https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-calendrier-scolaire&q=&rows=10&facet=description&facet=start_date&facet=end_date&facet=zones&facet=annee_scolaire",
      {
        params: {
          "refine.start_date": req.body.start_date,
          "refine.location": req.body.location,
        },
      }
    );
    return res
      .status(responseBody.responseCode.SUCCESS)
      .send(
        responseBody.buildResponseBody(
          resp.data.records,
          responseBody.responseCode.SUCCESS
        )
      );
  } catch {
    console.error("error");
    return res
      .status(responseBody.responseCode.INTSERVERR)
      .send(
        responseBody.buildResponseBody(
          "error axios",
          responseBody.responseCode.INTSERVERR
        )
      );
  }
};
const getPublicHolidayList = (req, res) => {
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
  return Class.findOne({ _id: req.body.classId }, (error, cls) => {
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
    return Event.find({ _id: cls.events }, (err, abs) => {
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
  getPublicHolidayList,
  getHolidayList,
  getEventsClass,
};
