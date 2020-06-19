const userRoutes = require('./userRoutes');
const infoRoutes = require('./infoRoutes');
const authRoutes = require('./authRoutes');
const taskRoutes = require('./taskRoutes');
const scheduleRoutes = require('./scheduleRoutes');
const mailRoutes = require('./mailRoutes');

const routes = [
  ['info', infoRoutes],
  ['user', userRoutes],
  ['auth', authRoutes],
  ['task', taskRoutes],
  ['schedule', scheduleRoutes],
  ['mail', mailRoutes],
];

module.exports = routes;
