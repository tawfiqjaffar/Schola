const { Types } = require('mongoose');
const Ticket = require('../../models/ticket');
const Comment = require('../../models/comment');
const rb = require('../../routes/responseBody');

const STATUS = ['open', 'inProgress', 'resolved'];

const updateTicketStatus = (req, res) => {
  const { user } = req;
  const { ticketId, status } = req.body;

  if (STATUS.indexOf(status) < 0) {
    return res
      .status(500)
      .send(
        rb.buildResponseBody(
          'you must provide a status of value "open", "resolved" or "inProgress"'
        )
      );
  }
  return Ticket.findOne({
    _id: Types.ObjectId(ticketId),
    assignedTo: user.role,
  })
    .populate('creator')
    .then((ticket) => {
      if (!ticket) {
        return res
          .status(404)
          .send(
            rb.buildResponseBody(
              `the ticket ${ticketId} could not be found`,
              404
            )
          );
      } else {
        return Ticket.updateOne(
          { _id: ticketId },
          { status },
          (err, result) => {
            if (err) {
              return res.status(500).send(rb.buildResponseBody(err, 500));
            } else {
              return res.status(200).send(rb.buildResponseBody(result, 200));
            }
          }
        );
      }
    });
};

const addCommentToTicket = (req, res) => {
  const { user } = req;

  const { content, ticketId } = req.body;

  Ticket.findById(ticketId, (err, ticket) => {
    if (err) {
      return res.status(404).send(rb.buildResponseBody(err, 404));
    } else {
      const comment = new Comment({
        content,
        creator: user,
      });
      ticket.comments.push(comment);
      ticket.save((errPush, done) => {
        if (errPush) {
          return res.status(500).send(rb.buildResponseBody(errPush, 500));
        } else {
          return res.status(200).send(rb.buildResponseBody(done, 200));
        }
      });
    }
  });
};

module.exports = { updateTicketStatus, addCommentToTicket };
