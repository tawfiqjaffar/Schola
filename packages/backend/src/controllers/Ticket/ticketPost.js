const { Mongoose, Types } = require('mongoose');
const Ticket = require('../../models/ticket');
const responseBody = require('../../routes/responseBody');

const createTicket = (req, res) => {
  const { user } = req;
  const { role } = user;
  const { label, subject, content, school } = req.body;
  let assignedTo = '';
  if (role === 'admin' || role === 'superadmin') assignedTo = 'superadmin';
  else assignedTo = 'admin';

  const newTicket = new Ticket({
    label,
    subject,
    content,
    school: !school ? null : Types.ObjectId(school),
    creator: Types.ObjectId(user._id),
    assignedTo,
  });

  newTicket.save((err, ticket) => {
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
        .send(responseBody.buildResponseBody(ticket));
    }
  });
};

module.exports = {
  createTicket,
};
