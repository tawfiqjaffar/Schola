const Diary = require('../../models/diary');
const responseBody = require('../../routes/responseBody');

const getAllDiaries = (req, res) => {
    Diary.find({}, (err, data) => {
        if (err) {
            return res.status(responseBody.responseCode.INTSERVERR)
            .send(
                responseBody.buildResponseBody(error, responseBody.responseCode.INTSERVERR)
            );
        } else {
            return res.status(responseBody.responseCode.SUCCESS)
            .send(
                responseBody.buildResponseBody(data, responseBody.responseCode.SUCCESS)
            );
        }
    })
}

module.exports = {
    getAllDiaries,
};  