const User = require("../../models/user");
const Class = require("../../models/class");
const LWE = require("../../models/LWE");
const responseBody = require("../../routes/responseBody");

const getAllLWE = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    return LWE.find({}, (err, data) => {
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

const getSubjectLevelLWE = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    return LWE.find(
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

const getStudentLWE = (req, res) => {
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
          return LWE.find({ classLevel: classStudent }, (errs, doc) => {
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

const getStudentSubjectLWE = (req, res) => {
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
          console.log(classStudent);
          console.log(req.body.subjectId);
          return LWE.find(
            { classLevel: classStudent, subjectId: req.body.subjectId },
            (errs, doc) => {
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
  getAllLWE,
  getSubjectLevelLWE,
  getStudentLWE,
  getStudentSubjectLWE,
};
