const Task = require('../../models/task');
const responseBody = require('../../routes/responseBody');
const { getStartWeek, getEndWeek } = require('../dateFunction');

const getAllTask = (req, res) => {
    Task.find({ usersId: req.user._id }, (err, data) => {
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

const getDayTask = (req, res) => {
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    Task.find({ $and: [
        { usersId: req.user._id },
        { dueDate: date }
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

const getWeekTask = (req, res) => {
    var monday = getStartWeek();
    var sunday = getEndWeek();
    Task.find({ $and: [
        { usersId: req.user._id },
        { dueDate: {$gte: monday, $lte: sunday} }
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
    getAllTask,
    getDayTask,
    getWeekTask
};  