
const notif = require('./notifthread');
const { runServer, app } = require('./initConnections');

const port = process.env.PORT || 8080;

try {
  runServer();
  setInterval(() => { notif.checkStudent(); }, 5000)
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
} catch (err) {
  console.error(err);
}

module.exports = runServer;
