const Task = require('../../models/task');
const responseBody = require('../../routes/responseBody');

const updateTask = (req, res) => {
    const id = req.body.id;
    const newLabel = req.body.label;


    Task.updateOne( { _id: id },
        { $set: {label: newLabel } },
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

const updateDateTask = (req, res) => {
    const id = req.body.id;
    const newDueDate = req.body.dueDate;


    Task.updateOne( { _id: id },
        { $set: {dueDate: newDueDate } },
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
    updateTask,
    updateDateTask
};  