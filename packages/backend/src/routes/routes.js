const userRoutes = require('./userRoutes');
const infoRoutes = require('./infoRoutes');
const authRoutes = require('./authRoutes');
const diaryRoutes = require('./diaryRoutes');
const scheduleRoutes = require('./scheduleRoutes');

const routes = [
  ['info', infoRoutes],
  ['user', userRoutes],
  ['auth', authRoutes],
  ['diary', diaryRoutes],
  ['schedule', scheduleRoutes],
];

module.exports = routes;
