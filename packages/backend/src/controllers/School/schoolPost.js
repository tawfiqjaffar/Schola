const School = require('../../models/school');
const responseBody = require('../../routes/responseBody');

const createSchool = (req, res) => {
  if (req.user.role === 'viesco' || req.user.role === 'admin') {
    delete req.body._id;

    const { name, address } = req.body;

    const school = new School({
      name,
      address,
    });

    return school.save((err, data) => {
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
  } else {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          'You do not have the access right to perform such a modification',
          responseBody.responseCode.FORBID
        )
      );
  }
};

module.exports = {
  createSchool,
};
