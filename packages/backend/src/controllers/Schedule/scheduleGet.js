const Schedule = require('../../models/schedule');
const responseBody = require('../../routes/responseBody');
const { getStartDay, getEndDay } = require('./scheduleFunction');
const { getStartWeek, getEndWeek } = require('./scheduleFunction');

const getAllSchedule = (req, res) => {
    Schedule.find({ usersId: req.user._id }, (err, data) => {
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

const getDaySchedule = (req, res) => {
    var startDay = getStartDay();
    var endDay = getEndDay();
    Schedule.find({ $and: [
        { usersId: req.user._id },
        { start: { $gte: startDay, $lte: endDay } }
    ] }, (err, data) => {
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

const getWeekSchedule = (req, res) => {
    var monday = getStartWeek();
    var sunday = getEndWeek();
    Schedule.find({ $and: [
        { usersId: req.user._id },
        { start: { $gte: monday, $lte: sunday } }
    ] }, (err, data) => {
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
    getDaySchedule,
    getWeekSchedule,
};