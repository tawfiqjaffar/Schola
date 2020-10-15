const uri = {
  weekcourse: {
    path: '/schedule/week/',
    method: 'get',
  },
  daycourse: {
    path: '/schedule/day/',
    method: 'get',
  },
  allcourse: {
    path: '/schedule/',
    method: 'get',
  },
  create: {
    path: '/schedule/create/',
    method: 'post',
  },
  update: {
    path: '/schedule/update/',
    method: 'put',
  },
  deleteSchedule: {
    path: '/schedule/delete/',
    method: 'delete',
  }
};
export default uri;
