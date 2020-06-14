const Schedule = require('../../models/schedule');
const responseBody = require('../../routes/responseBody');

const updateDateSchedule = (req, res) => {
    const id = req.body.id;
    const newStart = req.body.start;
    const newEnd = req.body.end;

    Schedule.updateOne( { _id: id },
        { $set: {start: newStart, end: newEnd} },
        (err, data) => {
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
    updateDateSchedule
};