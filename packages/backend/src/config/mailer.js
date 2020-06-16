require('dotenv');
const nodemailer = require('nodemailer');

const email = process.env.EMAIL;
const password = process.env.EMAIL_PWD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

const sendEmail = (toEmail, code) => {
  const mailOptions = {
    from: email,
    to: toEmail,
    subject: '[Schola] - Récupération de votre mot de passe',
    text: code,
  };

  let result = {};

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      result = err;
    } else {
      result = info;
    }
  });
  return result;
};

module.exports = sendEmail;
