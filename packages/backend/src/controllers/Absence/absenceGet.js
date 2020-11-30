
const User = require('../../models/user');
const Class = require('../../models/class');
const Absence = require('../../models/absence');
const responseBody = require('../../routes/responseBody');

const getAbsenceStudent = (req, res) => {
	Absence.find({studentId: req.body.studentId}, (err, abs) => {
		if (err) {
			return res
			  .status(responseBody.responseCode.INTSERVERR)
			  .send(
				responseBody.buildResponseBody(
				  error,
				  responseBody.responseCode.INTSERVERR
				)
			  );
		  }
		  console.log(abs)
		  return res
    		.status(responseBody.responseCode.SUCCESS)
    		.send(
      		responseBody.buildResponseBody(abs, responseBody.responseCode.SUCCESS)
    		);
	})
  }

  const getAbsenceClass = (req, res) => {
	Class.findOne({_id: req.body.classId}, (error, cls) => {
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
		  Absence.find({_id: cls.absence}, (err, abs) => {
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
			  console.log(abs)
			  return res
				.status(responseBody.responseCode.SUCCESS)
				.send(
				  responseBody.buildResponseBody(abs, responseBody.responseCode.SUCCESS)
				);
		})

	})
  }

  module.exports = {
	  getAbsenceStudent,
	  getAbsenceClass,
  };