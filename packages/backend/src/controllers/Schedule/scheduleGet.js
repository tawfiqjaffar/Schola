const Schedule = require('../../models/schedule');
const responseBody = require('../../routes/responseBody');

const getAllSchedule = (req, res) => {
    Schedule.find({}, (err, data) => {
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
    getAllSchedule,
};  