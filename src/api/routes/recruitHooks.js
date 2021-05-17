/**
 * The routes related to beta testers integration
 */

const express = require("express");
const cors = require("cors");
const sendGrid = require("../services/sendGrid.js");

const routes = express.Router();

// Enables CORS on those routes according config above
// ToDo configure CORS for set of our trusted domains
routes.use(cors());
routes.options("*", cors());

routes.post("/recruit", (req, res) => {
  sendGrid
    .sendEmailDirect({
      personalizations: [
        {
          to: [{ email: "kiril.kartunov@gmail.com" }],
          subject: "Recruit hook payload",
        },
      ],
      from: {
        email: "noreply@topcoder.com",
      },
      content: [
        {
          type: "text/plain",
          value: JSON.stringify(req.body),
        },
      ],
    })
    .then((result) => {
      res.send({});
    });
});

module.exports = routes;
