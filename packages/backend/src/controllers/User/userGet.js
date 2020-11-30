// get user info

const User = require('../../models/user');
const Class = require('../../models/class');
const Absence = require('../../models/absence');
const responseBody = require('../../routes/responseBody');

const getAllUsersAdmin = (req, res) => {
  const { user } = req;
  console.log(user);

  return User.findById(user._id, (error, foundSingle) => {
    if (error) {
      return res
        .status(responseBody.responseCode.NOTFOUND)
        .send(
          responseBody.buildResponseBody(
            error,
            responseBody.responseCode.NOTFOUND
          )
        );
    }
    const { role } = foundSingle;
    if (role === 'admin') {
      return User.find({}, (err, users) => {
        if (err) {
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                err,
                responseBody.responseCode.INTSERVERR
              )
            );
        }
        return res
          .status(responseBody.responseCode.SUCCESS)
          .send(
            responseBody.buildResponseBody(
              users,
              responseBody.responseCode.SUCCESS
            )
          );
      });
    } else {
      return User.findOne({ _id: user._id }, (err, found) => {
        if (err) {
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                err,
                responseBody.responseCode.INTSERVERR
              )
            );
        }
        return res
          .status(responseBody.responseCode.SUCCESS)
          .send(
            responseBody.buildResponseBody(
              found,
              responseBody.responseCode.SUCCESS
            )
          );
      });
    }
  });
};


var nbAbs = 0

const getStatsAbsence = (req, res) => {
  User.findOne({ _id: req.body.id }, (err, found) => {
    if (err) {
      return res
        .status(responseBody.responseCode.INTSERVERR)
        .send(
          responseBody.buildResponseBody(
            err,
            responseBody.responseCode.INTSERVERR
          )
        );
    }
    Absence.find({ _id: found.absence, mois: req.body.mois}, (error, abs) => {
        if (error) {
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                error,
                responseBody.responseCode.INTSERVERR
              )
            );
        }
        nbAbs = abs.length
      Class.findOne({ _id: found.classId }, (error, cls) => {
        if (error) {
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                error,
                responseBody.responseCode.INTSERVERR
              )
            );
        }
        Absence.find({ _id: cls.absence , mois: req.body.mois}, (error, abs2) => {
          if (error) {
            return res
              .status(responseBody.responseCode.INTSERVERR)
              .send(
                responseBody.buildResponseBody(
                  error,
                  responseBody.responseCode.INTSERVERR
                )
              );
          }
          var nbAbs2 = abs2.length
        console.log(found.firstName + " " + found.lastName + " a totalisé " + nbAbs + " absence(s) au mois de " + req.body.mois + " soit " +
        Math.round((100 * nbAbs) / nbAbs2) + "% des absences de sa classe")
    return res
    .status(responseBody.responseCode.SUCCESS)
    .send(
      responseBody.buildResponseBody(Math.round((100 * nbAbs) / nbAbs2), responseBody.responseCode.SUCCESS)
    );
        });
    });
      });
  });
}

const getNumberAbsence = (req, res) => {
  User.findOne({ _id: req.body.id }, (err, found) => {
    if (err) {
      return res
        .status(responseBody.responseCode.INTSERVERR)
        .send(
          responseBody.buildResponseBody(
            err,
            responseBody.responseCode.INTSERVERR
          )
        );
    }
    Class.findOne({ _id: found.classId }, (error, cls) => {
      if (error) {
        return res
          .status(responseBody.responseCode.INTSERVERR)
          .send(
            responseBody.buildResponseBody(
              error,
              responseBody.responseCode.INTSERVERR
            )
          );
      }
      console.log(found.firstName + " " + found.lastName + " a totalisé " + found.absence.length + " absence(s) soit " +
      Math.round((100 * found.absence.length) / cls.absence.length) + "% des absences de sa classe")
    });
    return res
      .status(responseBody.responseCode.SUCCESS)
      .send(
        responseBody.buildResponseBody(found.absence.length, responseBody.responseCode.SUCCESS)
      );
  });
}

const getMe = (req, res) => {
  const { user } = req;
  User.findOne({ _id: user._id }, (err, found) => {
    if (err) {
      return res
        .status(responseBody.responseCode.INTSERVERR)
        .send(
          responseBody.buildResponseBody(
            err,
            responseBody.responseCode.INTSERVERR
          )
        );
    }
    return res
      .status(responseBody.responseCode.SUCCESS)
      .send(
        responseBody.buildResponseBody(found, responseBody.responseCode.SUCCESS)
      );
  });
};

const sortTeacher = (req, res) => {
	User.find({role: "teacher"}, null , {sort: {lastName: req.body.sort}} ,  (err, abs) => {
		if (err) {
			return res
			  .status(responseBody.responseCode.INTSERVERR)
			  .send(
				responseBody.buildResponseBody(
				  error,
				  responseBody.responseCode.INTSERVERR
				)
			  );
		  }
		  return res
    		.status(responseBody.responseCode.SUCCESS)
    		.send(
      		responseBody.buildResponseBody(abs, responseBody.responseCode.SUCCESS)
    		);
	})
  }

    const sortSubjectTeacher = (req, res) => {
      User.find({teacherSubject: req.body.teacherSubject, role: "teacher"},  (err, abs) => {
        if (err) {
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
            responseBody.buildResponseBody(
              error,
              responseBody.responseCode.INTSERVERR
            )
            );
          }
          return res
            .status(responseBody.responseCode.SUCCESS)
            .send(
              responseBody.buildResponseBody(abs, responseBody.responseCode.SUCCESS)
            );
      })
      }

module.exports = {
  getAllUsersAdmin,
  getMe,
  getNumberAbsence,
  getStatsAbsence,
  sortTeacher,
  sortSubjectTeacher,
};
