const userRoutes = require('./userRoutes');
const infoRoutes = require('./infoRoutes');
const authRoutes = require('./authRoutes');
const taskRoutes = require('./taskRoutes');
const scheduleRoutes = require('./scheduleRoutes');
const mailRoutes = require('./mailRoutes');
const classRoutes = require('./classRoutes');
const absenceRoutes = require('./absenceRoutes');
const gradeRoutes = require('./gradeRoutes');
const eventRoutes = require('./eventRoutes');

const routes = [
  ['info', infoRoutes],
  ['user', userRoutes],
  ['auth', authRoutes],
  ['task', taskRoutes],
  ['schedule', scheduleRoutes],
  ['mail', mailRoutes],
  ['class', classRoutes],
  ['absence', absenceRoutes],
  ['grade', gradeRoutes],
  ['event', eventRoutes],
];

module.exports = routes;
