// const randstring = require('randomstring');
const Class = require("../../models/class");
const responseBody = require("../../routes/responseBody");
// const { hashPassword } = require('../../encryption/hash');
// const { sendEmail } = require('../../config/mailer');

const postCreateClass = (req, res) => {
  const newClass = new Class({
    classYear: req.body.classYear,
    classNumber: req.body.classNumber,
    teacherId: req.body.teacherId,
    studentsId: req.body.studentsId,
  });
  return newClass.save((err, data) => {
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
  });
};

module.exports = {
  postCreateClass,
};
