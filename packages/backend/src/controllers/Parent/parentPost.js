/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const Parent = require('../../models/parent');
const User = require('../../models/user');

const createParent = (req, res) => {
  const { studentId, parentId } = req.body;

  return User.findById(
    mongoose.Types.ObjectId(studentId),
    (errStudent, _student) => {
      if (errStudent) {
        return res.status(404).send(errStudent);
      } else {
        return User.findById(
          mongoose.Types.ObjectId(parentId),
          (errParent, _parent) => {
            if (errParent) {
              return res.status(404).send(errParent);
            } else {
              const newParent = new Parent({
                parentId: mongoose.Types.ObjectId(parentId),
                studentId: mongoose.Types.ObjectId(studentId),
              });
              return newParent.save((errSave, saved) => {
                if (errSave) {
                  return res.status(500).send(errSave);
                } else {
                  return res.status(200).send(saved);
                }
              });
            }
          }
        );
      }
    }
  );
};

module.exports = { createParent };
