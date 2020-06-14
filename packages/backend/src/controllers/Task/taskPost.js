const Task = require('../../models/task');
const responseBody = require('../../routes/responseBody');

const createTask = (req, res) => {
    delete req.body._id;

    const task = new Task({
        ...req.body
    })

    task.save((err, data) => {
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
    createTask,
};  