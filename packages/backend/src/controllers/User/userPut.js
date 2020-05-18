// request to update info in db about user

const User = require('../../models/user');
const responseBody = require('../../routes/responseBody');

const updateRole = (req, res) => {
  const { id } = req.body;
  const { role } = req.body;
  const { user } = req;

  User.findById(user._id, (error, foundSignle) => {
    if (error) {
      return res
        .status(responseBody.responseCode.NOTFOUND)
        .send(
          responseBody.buildResponseBody(
            error,
            responseBody.responseCode.NOTFOUND
          )
        );
    } else {
      const roleFound = foundSignle.role;
      if (roleFound === 'admin') {
        User.findOneAndUpdate(
          { _id: id },
          { role },
          { new: true },
          (err, result) => {
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
            return res
              .status(200)
              .send(
                responseBody.buildResponseBody(
                  result,
                  responseBody.responseCode.SUCCESS
                )
              );
          }
        );
      } else {
        return res
          .status(responseBody.responseCode.FORBID)
          .send(
            responseBody.buildResponseBody(
              'You do not have the access right to make such a modification',
              responseBody.responseCode.FORBID
            )
          );
      }
    }
  });
};

module.exports = { updateRole };