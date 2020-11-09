require('dotenv');

const responseBody = require('../../routes/responseBody');
const Quizz = require('../../models/quizz');


const Create = (req, res) => {
    console.log(req.body)
    Quizz.create({name : req.body.quizzname, question: req.body}, (err , s)=>{
        console.log(err,s)
    })
}

module.exports = {
    Create,
};
