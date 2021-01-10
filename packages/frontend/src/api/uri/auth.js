const uri = {
  login: {
    path: '/auth/login',
    method: 'post',
  },
  quizz: {
    post: {
      path: '/quizz',
      method: 'post',
    },
    all: {
      path: '/quizz',
      method: 'get',
    },
    get: {
      path: '/quizz/',
      method: 'get',
    }
  },
};

export default uri;
