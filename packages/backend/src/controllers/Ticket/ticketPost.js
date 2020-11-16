const Ticket = require('../../models/ticket');
const { responseCode } = require('../../routes/responseBody');
const responseBody = require('../../routes/responseBody');

const createTicket = (req, res) => {
  const { user } = req;
  const { role } = user;
  const { label, content } = req.body;
  let assignedTo = '';

  if (role === 'student') {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          'you do not have the required rights to do that',
          responseCode.FORBID
        )
      );
  } else if (role === 'admin' || role === 'superadmin') {
    assignedTo = 'superadmin';
  } else {
    assignedTo = 'admin';
  }

  const newTicket = new Ticket({
    label,
    content,
    creator: user._id,
    assignedTo,
  });

  return newTicket.save((err, ticket) => {
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
