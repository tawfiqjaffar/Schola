/* eslint-disable no-unused-vars */
const nodemailer = require("nodemailer");
const User = require("./src/models/user");

const Abs = require("./src/models/absence");
const Grade = require("./src/models/grade");

const sendMailStudentAbs = (firstName, lastName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yassine78114@gmail.com",
      pass: "yaswassof78114",
    },
  });
  const mailOptions = {
    from: "yassine78114@gmail.com",
    to: "yassine.rachah@epitech.eu",
    subject: `Trop d'absences : ${firstName} ${lastName}`,
    text: "A rectifier",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: ");
    }
  });
};
const sendMailStudentGrade = (firstName, lastName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yassine78114@gmail.com",
      pass: "yaswassof78114",
    },
  });
  const mailOptions = {
    from: "yassine78114@gmail.com",
    to: "yassine.rachah@epitech.eu",
    subject: `Mauvais resulats  : ${firstName} ${lastName}`,
    text: "A rectifier",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: ");
    }
  });
};

const checkGrade = (row, callback) => {
  Grade.findOne({ _id: row._id }).then(function (result) {
    if (result) {
      if (result.grade < 10) {
        callback(true);
      } else {
        callback(false);
      }
    }
  });
};

const checkStudent = () => {
  User.find({}, (err, user) => {
    if (err) {
      console.log("error");
    } else {
      let nb = 0;
      user.forEach(function (row) {
        if (row.role === "student") {
          if (row.absence.length !== 0) {
            if (row.nextMail === row.absence.length) {
              console.log(row.firstName);
              sendMailStudentAbs(row.firstName, row.lastName);
              User.findOneAndUpdate(
                { _id: row._id },
                { nextMail: row.nextMail + 2 }
              ).then(function () {});
            }
          }
          if (row.grade.length !== 0) {
            row.grade.forEach(function (row2) {
              checkGrade(row2, (res) => {
                if (res === true) {
                  nb += 1;
                  if (nb === row.nextMailGrade) {
                    sendMailStudentGrade(row.firstName, row.lastName);
                    User.findOneAndUpdate(
                      { _id: row._id },
                      { nextMailGrade: row.nextMailGrade + 2 }
                    ).then(function () {});
                  }
                }
              });
            });
          }
        }
      });
    }
  });
};

module.exports = { checkStudent };
