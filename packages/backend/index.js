const { runServer, closeServer } = require('./initConnections');

try {
  runServer();
} catch (err) {
  console.error(err);
}

module.exports = runServer;
