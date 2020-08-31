const mongoose = require('mongoose');

const Grade = require('../../models/grade');
const responseBody = require('../../routes/responseBody');

const getAllGrade = (req, res) => {
  return Grade.find({ studentId: req.user._id }, (err, data) => {
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

const getSubjectGrade = (req, res) => {
  return Grade.find(
    { $and: [{ studentId: req.user._id }, { subjectId: req.body.subjectId }] },
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
        return res
          .status(responseBody.responseCode.SUCCESS)
          .send(
            responseBody.buildResponseBody(
              { average: total / grades.length, grades: data },
              responseBody.responseCode.SUCCESS
            )
          );
      }
    }
  );
};

module.exports = {
  getAllGrade,
  getSubjectGrade,
  getUserAverage,
  getUserAverageBySubjectId,
};
