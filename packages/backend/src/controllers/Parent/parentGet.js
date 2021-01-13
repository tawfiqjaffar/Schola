const mongoose = require("mongoose");
const Parent = require("../../models/parent");

const getAllParents = (req, res) => {
  return Parent.find({}, (err, docs) => {
    return res.status(200).send(docs);
  });
};

const getParentsChildren = (req, res) => {
  const { parentId } = req.body;
  return Parent.find(
    { parentId: mongoose.Types.ObjectId(parentId) },
    (err, children) => {
      if (err) {
        return res.status(404).send(err);
      } else {
        return res.status(200).send(children);
      }
    }
  );
};

const getChildsParents = (req, res) => {
  const { studentId } = req.body;
  return Parent.find(
    { studentId: mongoose.Types.ObjectId(studentId) },
    (err, parents) => {
      if (err) {
        return res.status(404).send(err);
      } else {
        return res.status(200).send(parents);
      }
    }
  );
};

module.exports = { getAllParents, getParentsChildren, getChildsParents };
