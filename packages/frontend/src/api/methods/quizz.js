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
            method: uri.quizz.method,
            url: uri.quizz.path,
            data: state,
        });
        return response.data;
};

export default postQuizz;
