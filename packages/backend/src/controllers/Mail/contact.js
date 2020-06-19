require('dotenv');

const { sendEmailContact } = require('../../config/mailer');
const responseBody = require('../../routes/responseBody');

const emailUs = process.env.EMAIL;

const contactUs = (req, res) => {
  const { email, message } = req.body;

  return sendEmailContact(
    emailUs,
    `message from: ${email}\n\n${message}`,
    (errMail, info) => {
      if (errMail) {
        console.error(errMail);
        return res
          .status(responseBody.responseCode.INTSERVERR)
          .send(
            responseBody.buildResponseBody(
              errMail,
              responseBody.responseCode.INTSERVERR
            )
          );
      } else {
        return res
          .status(200)
          .send(responseBody.buildResponseBody({ info, message }, 200));
      }
    }
  );
};

module.exports = {
  contactUs,
};
