const Schedule = require('../../models/schedule');
const responseBody = require('../../routes/responseBody');

const createSchedule = (req, res) => {
    delete req.body._id;

    const schedule = new Schedule({
        ...req.body
    })

    schedule.save((err, data) => {
        if (err) {
            console.log(err);
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
    createSchedule
};