const uri = {
  weekTask: {
    path: '/task/week/',
    method: 'get',
  },
  dayTask: {
    path: '/task/day/',
    method: 'get',
  },
  allTask: {
    path: '/task/',
    method: 'get',
  },
  createTask: {
    path: '/task/create/',
    method: 'post',
  },
  updateTask: {
    path: '/task/update/',
    method: 'put',
  },
  updateDateTask: {
    path: '/task/updateDate/',
    method: 'put',
  },
  deleteTask: {
    path: '/task/delete/',
    method: 'delete',
  }
};
export default uri;
