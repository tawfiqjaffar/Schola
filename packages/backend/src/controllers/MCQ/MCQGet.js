const MCQ = require('../../models/MCQ');
const responseBody = require('../../routes/responseBody');

const getAllMCQ = (req, res) => {
  if (req.user.role === 'viesco' || req.user.role === 'admin') {
    return MCQ.find({}, (err, data) => {
      if (err) {
        return res
          .status(responseBody.responseCode.INTSERVERR)
          .send(
            responseBody.buildResponseBody(
              err,
              responseBody.responseCode.INTSERVERR
            )
          );
      } else {
        return res
          .status(responseBody.responseCode.SUCCESS)
          .send(
            responseBody.buildResponseBody(
              data,
              responseBody.responseCode.SUCCESS
            )
          );
      }
    });
  } else {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          'You do not have the access right to get these informations',
          responseBody.responseCode.FORBID
        )
      );
  }
};

const getSubjectMCQ = (req, res) => {
  if (req.user.role === 'viesco' || req.user.role === 'admin') {
    return MCQ.find({ subjectId: req.body.subjectId }, (err, data) => {
      if (err) {
        return res
          .status(responseBody.responseCode.INTSERVERR)
          .send(
            responseBody.buildResponseBody(
              err,
              responseBody.responseCode.INTSERVERR
            )
          );
      } else {
        return res
          .status(responseBody.responseCode.SUCCESS)
          .send(
            responseBody.buildResponseBody(
              data,
              responseBody.responseCode.SUCCESS
            )
          );
      }
    });
  } else {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          'You do not have the access right to get these informations',
          responseBody.responseCode.FORBID
        )
      );
  }
};

const getLevelMCQ = (req, res) => {
  if (req.user.role === 'viesco' || req.user.role === 'admin') {
    return MCQ.find({ classLevel: req.body.classLevel }, (err, data) => {
      if (err) {
        return res
          .status(responseBody.responseCode.INTSERVERR)
          .send(
            responseBody.buildResponseBody(
              err,
              responseBody.responseCode.INTSERVERR
            )
          );
      } else {
        return res
          .status(responseBody.responseCode.SUCCESS)
          .send(
            responseBody.buildResponseBody(
              data,
              responseBody.responseCode.SUCCESS
            )
          );
      }
    });
  } else {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          'You do not have the access right to get these informations',
          responseBody.responseCode.FORBID
        )
      );
  }
};

const getSubjectLevelMCQ = (req, res) => {
  if (req.user.role === 'viesco' || req.user.role === 'admin') {
    return MCQ.find(
      {
        $and: [
          { classLevel: req.body.classLevel },
          { subjectId: req.body.subjectId },
        ],
      },
      (err, data) => {
        if (err) {
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                err,
                responseBody.responseCode.INTSERVERR
              )
            );
        } else {
          return res
            .status(responseBody.responseCode.SUCCESS)
            .send(
              responseBody.buildResponseBody(
                data,
                responseBody.responseCode.SUCCESS
              )
            );
        }
      }
    );
  } else {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          'You do not have the access right to get these informations',
          responseBody.responseCode.FORBID
        )
      );
  }
};

const getStudentMCQ = (req, res) => {
  const studentClassLevel = 'CM2';
  return MCQ.find({ classLevel: studentClassLevel }, (err, data) => {
    if (err) {
      return res
        .status(responseBody.responseCode.INTSERVERR)
        .send(
          responseBody.buildResponseBody(
            err,
            responseBody.responseCode.INTSERVERR
          )
        );
    } else {
      return res
        .status(responseBody.responseCode.SUCCESS)
        .send(
          responseBody.buildResponseBody(
            data,
            responseBody.responseCode.SUCCESS
          )
        );
    }
  });
};

const getStudentSubjectMCQ = (req, res) => {
  const studentClassLevel = 'CM2';
  return MCQ.find(
    {
      $and: [
        { classLevel: studentClassLevel },
        { subjectId: req.body.subjectId },
      ],
    },
    (err, data) => {
      if (err) {
        return res
          .status(responseBody.responseCode.INTSERVERR)
          .send(
            responseBody.buildResponseBody(
              err,
              responseBody.responseCode.INTSERVERR
            )
          );
      } else {
        return res
          .status(responseBody.responseCode.SUCCESS)
          .send(
            responseBody.buildResponseBody(
              data,
              responseBody.responseCode.SUCCESS
            )
          );
      }
    }
  );
};

module.exports = {
  getAllMCQ,
  getSubjectMCQ,
  getLevelMCQ,
  getSubjectLevelMCQ,
  getStudentMCQ,
  getStudentSubjectMCQ,
};
