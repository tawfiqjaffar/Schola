const Task = require('../../models/task');
const responseBody = require('../../routes/responseBody');

const deleteTask = (req, res) => {
    Task.find({}, (err, data) => {
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
    deleteTask,
};  