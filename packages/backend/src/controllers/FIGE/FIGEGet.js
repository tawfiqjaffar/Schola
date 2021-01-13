const User = require("../../models/user");
const Class = require("../../models/class.js");
const FIGE = require("../../models/FIGE");
const responseBody = require("../../routes/responseBody");

const getAllFIGE = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    return FIGE.find({}, (err, data) => {
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

const getSubjectLevelFIGE = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    return FIGE.find(
      { subjectId: req.body.subjectId, classLevel: req.body.classLevel },
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

const getStudentFIGE = (req, res) => {
  const { user } = req;

  return User.findOne({ _id: user._id }, (err, data) => {
    console.log(data.lastName);
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
      return Class.findOne({ _id: data.classId }, (error, result) => {
        if (error) {
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                error,
                responseBody.responseCode.INTSERVERR
              )
            );
        } else {
          const classStudent = result.classLevel;
          return FIGE.find({ classLevel: classStudent }, (errs, doc) => {
            console.log(doc);
            if (errs) {
              return res
                .status(responseBody.responseCode.INTSERVERR)
                .send(
                  responseBody.buildResponseBody(
                    errs,
                    responseBody.responseCode.INTSERVERR
                  )
                );
            } else {
              return res
                .status(responseBody.responseCode.SUCCESS)
                .send(
                  responseBody.buildResponseBody(
                    doc,
                    responseBody.responseCode.SUCCESS
                  )
                );
            }
          });
        }
      });
    }
  });
};

const getStudentSubjectFIGE = (req, res) => {
  const { user } = req;

  return User.findOne({ _id: user._id }, (err, data) => {
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
      return Class.findOne({ _id: data.classId }, (error, result) => {
        if (error) {
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                error,
                responseBody.responseCode.INTSERVERR
              )
            );
        } else {
          const classStudent = result.classLevel;
          return FIGE.find(
            { classLevel: classStudent, subjectId: req.body.subjectId },
            (errs, doc) => {
              console.log(doc);
              if (errs) {
                return res
                  .status(responseBody.responseCode.INTSERVERR)
                  .send(
                    responseBody.buildResponseBody(
                      errs,
                      responseBody.responseCode.INTSERVERR
                    )
                  );
              } else {
                return res
                  .status(responseBody.responseCode.SUCCESS)
                  .send(
                    responseBody.buildResponseBody(
                      doc,
                      responseBody.responseCode.SUCCESS
                    )
                  );
              }
            }
          );
        }
      });
    }
  });
};

module.exports = {
  getAllFIGE,
  getSubjectLevelFIGE,
  getStudentFIGE,
  getStudentSubjectFIGE,
};
