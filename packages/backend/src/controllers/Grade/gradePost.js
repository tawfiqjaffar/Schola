
const Grade = require('../../models/grade');

const User = require('../../models/user');
const responseBody = require('../../routes/responseBody');

const postCreateGrade = (req, res) => {
	  let newGrade = new Grade({
	  grade: req.body.grade,
	  subject: req.body.subject,
	  studentId: req.body.studentId
		});
			return newGrade.save((err, data) => {
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
		  User.findOneAndUpdate(
			{ _id: data.studentId },
			{ $push: { grade: data._id  } },  (err, usr) => {
			}
		 )
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
	postCreateGrade,
  };