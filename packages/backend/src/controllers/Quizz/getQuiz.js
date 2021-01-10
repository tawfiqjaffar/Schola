require('dotenv');

const responseBody = require('../../routes/responseBody');
const Quizz = require('../../models/quizz');


const getQuiz = (req, res) => {
    const { id } = req.params;
    console.log(id);

    return Quizz.find({ _id: id }, (err, data) => {
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
    getQuiz,
};
