const express = require('express');
const responseBody = require('./responseBody');

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(responseBody.responseCode.SUCCESS).send(
    responseBody.buildResponseBody(
      {
        version: 1.0,
        info: 'Server for Schola - EIP',
      },
      responseBody.responseCode.SUCCESS
    )
  );
});

module.exports = router;
