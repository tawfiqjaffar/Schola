const mongoose = require('mongoose');

const Subject = require('../../models/subject');
const Grade = require('../../models/grade');
const responseBody = require('../../routes/responseBody');

const getAllStudentGrades = (req, res) => {
  if (req.user.role === 'viesco' || req.user.role === 'admin') {
    return Grade.find({ studentId: req.body.studentId }, (err, data) => {
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
          'You do not have the access right to get these informations',
          responseBody.responseCode.FORBID
        )
      );
  }
};

const getReadableGrades = (req, res) => {
  return Grade.find(
    { $and: [{ studentId: req.user._id }, { readable: true }] },
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

const getSubjectStudentGrades = (req, res) => {
  if (req.user.role === 'viesco' || req.user.role === 'admin') {
    return Grade.find(
      {
        $and: [
          { studentId: req.body.studentId },
          { subjectId: req.body.subjectId },
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
  } else {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          'You do not have the access right to get these informations',
          responseBody.responseCode.FORBID
        )
      );
  }
};

const getReadableSubjectGrades = (req, res) => {
  return Grade.find(
    {
      $and: [
        { studentId: req.user._id },
        { subjectId: req.body.subjectId },
        { readable: true },
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

const getUserAverage = (req, res) => {
  const { user } = req;

  Grade.find({ studentId: user._id }, (err, data) => {
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
      const grades = [];
      let total = 0;
      data.forEach((el) => {
        grades.push(el.grade);
        total += el.grade;
      });
      return res
        .status(responseBody.responseCode.SUCCESS)
        .send(
          responseBody.buildResponseBody(
            { average: total / grades.length, grades: data },
            responseBody.responseCode.SUCCESS
          )
        );
    }
  });
};

const getUserAverageBySubjectId = (req, res) => {
  const { user } = req;
  const { subjectId } = req.query;
  console.log(subjectId);
  Grade.find(
    { studentId: user._id, subjectId: mongoose.Types.ObjectId(subjectId) },
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
        const grades = [];
        let total = 0;
        data.forEach((el) => {
          grades.push(el.grade);
          total += el.grade;
        });
        return Subject.findOne(
          { _id: mongoose.Types.ObjectId(subjectId) },
          (errSub, sub) => {
            if (errSub) {
              return res
                .status(responseBody.responseCode.INTSERVERR)
                .send(
                  responseBody.buildResponseBody(
                    err,
                    responseBody.responseCode.INTSERVERR
                  )
                );
            } else {
              return res.status(responseBody.responseCode.SUCCESS).send(
                responseBody.buildResponseBody(
                  {
                    average: total / grades.length,
                    grades: data,
                    subject: sub,
                  },
                  responseBody.responseCode.SUCCESS
                )
              );
            }
          }
        );
      }
    }
  );
};

const groupBySubject = (req, res) => {
  const { user } = req;
  Grade.find(
    { studentId: mongoose.Types.ObjectId(user._id) },
    (err, grades) => {
      const subjs = {};

      let i = 0;

      for (i; i < grades.length; i += 1) {
        const el = grades[i];
        if (!subjs[el.subjectId]) {
          subjs[el.subjectId] = [el];
        } else {
          subjs[el.subjectId].push(el);
        }
      }

      Object.keys(subjs).forEach((key) => {
        let total = 0;
        subjs[key].forEach((s) => {
          total += s.grade;
        });
        subjs[key] = { average: total / subjs[key].length, grades: subjs[key] };
      });
      return res.status(200).send(subjs);
    }
  );
};
module.exports = {
  getAllStudentGrades,
  getReadableGrades,
  getSubjectStudentGrades,
  getReadableSubjectGrades,
  getUserAverage,
  getUserAverageBySubjectId,
  groupBySubject,
};
