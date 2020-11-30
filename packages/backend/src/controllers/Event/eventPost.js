const Event = require('../../models/event');

const Class = require('../../models/class');
const responseBody = require('../../routes/responseBody');
const user = require('../../models/user');
const joursferies = require('../../joursferies');


const postCreateEvent = (req, res) => {
	  let newEvent = new Event({
	  date: req.body.date,
	  event: req.body.event,
	  classId: req.body.classId
		});
			return newEvent.save((err, data) => {
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

		  Class.findOneAndUpdate(
			{ _id: data.classId },
			{ $push: { events: data._id  } },  (err, usr) => {
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
	postCreateEvent,
  };