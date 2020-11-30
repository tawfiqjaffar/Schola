
const Class = require('../../models/class');
const responseBody = require('../../routes/responseBody');

const deleteClass = (req, res) => {
	return Class.deleteOne({ _id: req.body.id }, (err, data) => {
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
	deleteClass,
  };