const Grade = require('../../models/grade');
const responseBody = require('../../routes/responseBody');

const getAllGrade = (req, res) => {
  return Grade.find({}, (err, data) => {
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

const postCreateGrade = (req, res) => {
  console.log(req);
  const grade = new Grade({
    ...req.body,
  });

  console.log(req.body, grade);
  return grade.save((err, data) => {
    return res
      .status(responseBody.responseCode.SUCCESS)
      .send(
        responseBody.buildResponseBody(data, responseBody.responseCode.SUCCESS)
      );
  });
};

module.exports = {
  getAllGrade,
  getSubjectGrade,
  postCreateGrade,
};
