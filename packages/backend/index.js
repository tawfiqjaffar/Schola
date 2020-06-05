const runServer = require('./initConnections');

try {
  runServer();
} catch (err) {
  console.error(err);
}

module.exports = runServer;
