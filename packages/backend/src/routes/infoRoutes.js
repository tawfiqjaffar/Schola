const express = require("express");
const responseBody = require("./responseBody");

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(responseBody.responseCode.SUCCESS).send(
    responseBody.buildResponseBody(
      {
        version: 1.0,
        info: "Server for Schola - EIP",
      },
      responseBody.responseCode.SUCCESS
    )
  );
});

router.get("/doc", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res
    .status(200)
    .send(
      "<!DOCTYPE html>" +
        "<html>" +
        "    <head>" +
        '        <meta charset="utf-8" />' +
        "        <title> API Documentation</title>" +
        "    </head>" +
        "    <body>" +
        "     	<h2> API Documentation</h2>" +
        "       <h4> Vous trouverez ci-dessous le lien vers la documentation des requêtes </h4>" +
        '       <a href="https://epitechfr-my.sharepoint.com/:x:/g/personal/thomas_daulle_epitech_eu/EY681-kqxT1Ag9TA_jTLOKkBFn3GALEDuRYO4bC640oy1g?email=thomas.daulle%40epitech.eu&e=OLWg5Z">API documentation</a>' +
        "    </body>" +
        "</html>"
    );
});

module.exports = router;
