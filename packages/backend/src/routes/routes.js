const userRoutes = require('./userRoutes');
const infoRoutes = require('./infoRoutes');
const authRoutes = require('./authRoutes');
const taskRoutes = require('./taskRoutes');
const scheduleRoutes = require('./scheduleRoutes');
const gradeRoutes = require('./gradeRoutes');
const exerciceRoutes = require('./exerciceRoutes');
const mailRoutes = require('./mailRoutes');
const classRoutes = require('./classRoutes');
const absenceRoutes = require('./absenceRoutes');
const eventRoutes = require('./eventRoutes');
const schoolRoutes = require('./schoolRoutes');
const subjectRoutes = require('./subjectRoutes');
const canteenRoutes = require('./canteenRoutes');
const parentRoutes = require('./parentRoutes');
const teacherRoutes = require('./teacherRoutes');
const ticketRoutes = require('./ticketRoutes');

const routes = [
  ['info', infoRoutes],
  ['user', userRoutes],
  ['auth', authRoutes],
  ['task', taskRoutes],
  ['schedule', scheduleRoutes],
  ['exercice', exerciceRoutes],
  ['mail', mailRoutes],
  ['class', classRoutes],
  ['absence', absenceRoutes],
  ['grade', gradeRoutes],
  ['event', eventRoutes],
  ['school', schoolRoutes],
  ['subject', subjectRoutes],
  ['canteen', canteenRoutes],
  ['parent', parentRoutes],
  ['teacher', teacherRoutes],
  ['ticket', ticketRoutes],
];

module.exports = routes;
