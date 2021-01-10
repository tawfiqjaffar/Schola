const Exercice = require("../../models/exercice");
const responseBody = require("../../routes/responseBody");

const getAllExercices = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    return Exercice.find({}, (err, data) => {
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
  } else {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          "You do not have the access right to get these informations",
          responseBody.responseCode.FORBID
        )
      );
  }
};

const getSubjectExercices = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    return Exercice.find({ subjectId: req.body.subjectId }, (err, data) => {
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
  } else {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          "You do not have the access right to get these informations",
          responseBody.responseCode.FORBID
        )
      );
  }
};

const getLevelExercices = (req, res) => {
  return Exercice.find({ classLevel: req.body.classLevel }, (err, data) => {
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

const getSubjectLevelExercices = (req, res) => {
  return Exercice.find(
    {
      $and: [
        { subjectId: req.body.subjectId },
        { classLevel: req.body.classLevel },
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
  getAllExercices,
  getSubjectExercices,
  getLevelExercices,
  getSubjectLevelExercices,
};
