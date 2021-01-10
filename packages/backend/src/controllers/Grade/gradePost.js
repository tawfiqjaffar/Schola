const mongoose = require("mongoose");

const Grade = require('../../models/grade');
const User = require('../../models/user');
const responseBody = require('../../routes/responseBody');

// const createGrade = (req, res) => {
//   if (req.user.role === 'viesco' || req.user.role === 'admin') {
//     delete req.body._id;

//     const publisherId = req.user._id;
//     const { studentId, subjectId, grade, label, readable } = req.body;

//     const gradeDoc = new Grade({
//       publisherId: mongoose.Types.ObjectId(publisherId),
//       studentId: mongoose.Types.ObjectId(studentId),
//       subjectId: mongoose.Types.ObjectId(subjectId),
//       grade,
//       label,
//       readable,
//     });

//     return gradeDoc.save((err, data) => {
//       if (err) {
//         console.log(err);
//         return res
//           .status(responseBody.responseCode.INTSERVERR)
//           .send(
//             responseBody.buildResponseBody(
//               err,
//               responseBody.responseCode.INTSERVERR
//             )
//           );
//       } else {
//         return res
//           .status(responseBody.responseCode.SUCCESS)
//           .send(
//             responseBody.buildResponseBody(
//               data,
//               responseBody.responseCode.SUCCESS
//             )
//           );
//       }
//     });
//   } else {
//     return res
//       .status(responseBody.responseCode.FORBID)
//       .send(
//         responseBody.buildResponseBody(
//           'You do not have the access right to perform such a modification',
//           responseBody.responseCode.FORBID
//         )
//       );
//   }
// };

// module.exports = {
//   createGrade,
// };

const postCreateGrade = (req, res) => {
  let newGrade = new Grade({
  grade: req.body.grade,
  subject: req.body.subject,
  studentId: req.body.studentId
  });
    return newGrade.save((err, data) => {
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
    User.findOneAndUpdate(
    { _id: data.studentId },
    { $push: { grade: data._id  } },  (err, usr) => {
    }
   )
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
};

module.exports = {
postCreateGrade,
};
