const Task = require('../../models/task');
const responseBody = require('../../routes/responseBody');

const deleteTask = (req, res) => {
    if (req.user.role === 'teacher' || req.user.role === 'viesco' || req.user.role == 'admin') {
        Task.deleteOne({_id: req.body.id}, (err, data) => {
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
    deleteTask,
};  