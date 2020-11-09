const Grade = require('../../models/grade');
const responseBody = require('../../routes/responseBody');

const updateGrade = (req, res) => {
  if (req.user.role === 'viesco' || req.user.role === 'admin') {
    const { body } = req;
    const newGrade = req.body.grade;

    return Grade.updateOne(
      { _id: body.id },
      { $set: { grade: newGrade } },
      (err, data) => {
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
          'You do not have the access right to perform such a modification',
          responseBody.responseCode.FORBID
        )
      );
  }
};

module.exports = {
  updateGrade,
};
