const { runServer, app } = require('./initConnections');

const port = process.env.PORT || 8080;

try {
  runServer();
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
} catch (err) {
  console.error(err);
}

module.exports = runServer;
