const userRoutes = require('./userRoutes');
const infoRoutes = require('./infoRoutes');
const authRoutes = require('./authRoutes');

const routes = [
  ['info', infoRoutes],
  ['user', userRoutes],
  ['auth', authRoutes],
];

module.exports = routes;
