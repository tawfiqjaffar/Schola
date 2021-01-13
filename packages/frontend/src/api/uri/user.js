const uri = {
  all: {
    path: '/user/',
    method: 'get',
  },
  me: {
    path: '/user/me',
    method: 'get',
  },
  create: {
    path: '/user/create',
    method: 'post',
  },
  updateRole: {
    path: '/user/role',
    method: 'put',
  },
  resetPasswordRequest: {
    path: '/user/reset-password-request',
    method: 'post',
  },
  resetPassword: {
    path: '/user/reset-password',
    method: 'post',
  },
  addAbs: {
    path: '/user/AddAbsence',
    method: 'post',
  },
};

export default uri;
