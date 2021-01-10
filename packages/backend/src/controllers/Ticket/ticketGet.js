const Ticket = require("../../models/ticket");
const rb = require("../../routes/responseBody");

const getAllTickets = (req, res) => {
  const { user } = req;
  const { role, school } = user;

  if (role !== "admin" && role !== "superadmin") {
    return res
      .status(rb.responseCode.FORBID)
      .send(
        rb.buildResponseBody(
          "You do not have enough rights to view this information",
          rb.responseCode.FORBID
        )
      );
  } else {
    const query = {};

    if (role === "admin") {
      query.school = school;
    }
    query.assignedTo = role;

    return Ticket.find({ $or: [{ ...query }, { creator: user._id }] })
      .populate({
        path: "creator",
        populate: { path: "school", model: "School" },
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

const getSingleTicket = (req, res) => {
  const { user } = req;
  const { id } = req.params;

  return Ticket.findById(id)
    .populate("creator")
    .populate({
      path: "comments.creator",
    })
    .then((ticket) => {
      if (!ticket) {
        return res
          .status(404)
          .send(
            rb.buildResponseBody(`the ticket ${id} could not be found`, 404)
          );
      } else if (
        ticket.creator._id.toString() === user._id.toString() ||
        ticket.assignedTo === user.role
      ) {
        return res.status(200).send(rb.buildResponseBody(ticket, 200));
      } else {
        return res
          .status(403)
          .send(
            rb.buildResponseBody(
              "you do not have enough rights to view that ticket's information",
              403
            )
          );
        // if (
        //   ticket.creator._id !== user._id ||
        //   (ticket.assignedTo !== user.role && user.role !== 'superadmin')
        // ) {
        //   return res
        //     .status(403)
        //     .send(
        //       rb.buildResponseBody(
        //         "you do not have enough rights to view that ticket's information",
        //         403
        //       )
        //     );
        // }
        // return res.status(200).send(rb.buildResponseBody(ticket, 200));
      }
    });
};

module.exports = { getAllTickets, getSingleTicket };
