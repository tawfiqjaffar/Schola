// const axiosInstance = require('../config');
// const uri = require('../uri/auth');
import axiosInstance from '../config';
import uri from '../uri/auth';

/**
 * Logs into the platform, returns an accessToken if login successful
 * @param {String} email retrieved after login
 * @param {String} password retrieved after login
 * @returns {{code: Number, data: Object, message: String}}
 */
const postQuizz = async (state) => {
    const response = await axiosInstance({
        method: uri.quizz.post.method,
        url: uri.quizz.post.path,
        data: state,
    });
    return response.data;
};

const getQuizs = async (state) => {
    const response = await axiosInstance({
        method: uri.quizz.all.method,
        url: uri.quizz.all.path,
    });
    return response.data;
};

const getQuiz = async (id) => {
    const response = await axiosInstance({
        method: uri.quizz.get.method,
        url: uri.quizz.get.path + id,
    });
    return response.data;
};

export { postQuizz, getQuizs, getQuiz };
