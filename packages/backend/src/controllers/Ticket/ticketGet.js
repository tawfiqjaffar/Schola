const Ticket = require('../../models/ticket');
const rb = require('../../routes/responseBody');

const getAllTickets = (req, res) => {
  const { user } = req;
  const { role, school } = user;

  if (role !== 'admin' && role !== 'superadmin') {
    return res
      .status(rb.responseCode.FORBID)
      .send(
        rb.buildResponseBody(
          'You do not have enough rights to view this information',
          rb.responseCode.FORBID
        )
      );
  } else {
    const query = {};

    if (role === 'admin') {
      query.school = school;
    }
    query.assignedTo = role;
    return Ticket.find(query)
      .populate({
        path: 'creator',
        populate: { path: 'school', model: 'School' },
      })
      .then((tickets) => {
        return res
          .status(rb.responseCode.SUCCESS)
          .send(rb.buildResponseBody(tickets, rb.responseCode.SUCCESS));
      })
      .catch((err) => {
        return res
          .status(rb.responseCode.INTSERVERR)
          .send(rb.buildResponseBody(err, rb.responseCode.INTSERVERR));
      });
  }
};

module.exports = { getAllTickets };
