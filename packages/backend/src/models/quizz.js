const mongoose = require('mongoose');

const quizzSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    question: {
        type: Object,
    },
});

module.exports = mongoose.model('Quizz', quizzSchema);
