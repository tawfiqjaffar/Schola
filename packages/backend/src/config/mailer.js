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

const sendEmail = (toEmail, code, callback) => {
  const mailOptions = {
    from: email,
    to: toEmail,
    subject: '[Schola] - Récupération de votre mot de passe',
    text: code,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    callback(err, info);
  });
};

module.exports = sendEmail;
