require('dotenv');

const {
  sendEmailContact,
  sendRecievedNotification,
} = require('../../config/mailer');
const responseBody = require('../../routes/responseBody');

const emailUs = process.env.EMAIL;

const sentRecievedNotification = async (toEmail, data, callback) => {
  sendRecievedNotification(toEmail, data, () => {
    callback();
  });
};

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
        const text = `Votre message a bien été envoyé aux administrateurs de Schola. Vous pouvez consulter son contenu ci-dessous:\n\n${message}`;
        return sentRecievedNotification(email, text, () => {
          return res
            .status(200)
            .send(responseBody.buildResponseBody({ info, message }, 200));
        });
      }
    }
  );
};

module.exports = {
  contactUs,
};
