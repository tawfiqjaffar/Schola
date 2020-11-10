const userRoutes = require('./userRoutes');
const infoRoutes = require('./infoRoutes');
const authRoutes = require('./authRoutes');
const taskRoutes = require('./taskRoutes');
const scheduleRoutes = require('./scheduleRoutes');
const gradeRoutes = require('./gradeRoutes');
const exerciceRoutes = require('./exerciceRoutes');
const mailRoutes = require('./mailRoutes');
const schoolRoutes = require('./schoolRoutes');
const subjectRoutes = require('./subjectRoutes');
const canteenRoutes = require('./canteenRoutes');
const parentRoutes = require('./parentRoutes');
const teacherRoutes = require('./teacherRoutes');

const routes = [
  ['info', infoRoutes],
  ['user', userRoutes],
  ['auth', authRoutes],
  ['task', taskRoutes],
  ['schedule', scheduleRoutes],
  ['grade', gradeRoutes],
  ['exercice', exerciceRoutes],
  ['mail', mailRoutes],
  ['school', schoolRoutes],
  ['subject', subjectRoutes],
  ['canteen', canteenRoutes],
  ['parent', parentRoutes],
  ['teacher', teacherRoutes],
];

module.exports = routes;
