const Schedule = require('../../models/schedule');
const responseBody = require('../../routes/responseBody');

const createSchedule = (req, res) => {
    if (req.user.role === 'viesco' || req.user.role == 'admin') {
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
    } else {
        return res.status(responseBody.responseCode.FORBID)
        .send(
            responseBody.buildResponseBody(
                'You do not have the access right to perform such a modification',
                responseBody.responseCode.FORBID
            )
        );
    }
}

module.exports = {
    createSchedule
};