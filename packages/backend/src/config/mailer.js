require('dotenv');
const nodemailer = require('nodemailer');

const email = process.env.EMAIL;
const password = process.env.EMAIL_PWD;

console.log(email);
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

const getMailOptions = (toEmail, subject, text) => {
  const mailOptions = {
    from: `Schola <${email}>`,
    to: toEmail,
    subject,
    text,
  };
  return mailOptions;
};

const sendEmail = (toEmail, code, callback) => {
  const mailOptions = getMailOptions(
    toEmail,
    '[Schola] - Récupération de votre mot de passe',
    code
  );

  transporter.sendMail(mailOptions, (err, info) => {
    callback(err, info);
  });
};

const sendEmailContact = (toEmail, code, callback) => {
  const mailOptions = getMailOptions(
    toEmail,
    '[Schola] - Email de contact',
    code
  );

  transporter.sendMail(mailOptions, (err, info) => {
    callback(err, info);
  });
};

const sendRecievedNotification = (toEmail, data, callback) => {
  const mailOptions = getMailOptions(
    toEmail,
    '[Schola] - Email de contact',
    data
  );
  transporter.sendMail(mailOptions, (err, info) => {
    callback();
  });
};

module.exports = { sendEmail, sendEmailContact, sendRecievedNotification };
