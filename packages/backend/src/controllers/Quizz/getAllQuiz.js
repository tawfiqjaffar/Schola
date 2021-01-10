require('dotenv');

const responseBody = require('../../routes/responseBody');
const Quizz = require('../../models/quizz');


const getAllQuiz = (req, res) => {
    return Quizz.find({ }, (err, data) => {
      if (err) {
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
  };
module.exports = {
    getAllQuiz,
};
