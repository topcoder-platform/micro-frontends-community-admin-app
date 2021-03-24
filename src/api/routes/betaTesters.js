/**
 * The routes related to beta testers integration
 */

import express from "express";
import { getMembers } from "../services/betaTesters";

const cors = require("cors");

const routes = express.Router();

// Enables CORS on those routes according config above
// ToDo configure CORS for set of our trusted domains
routes.use(cors());
routes.options("*", cors());

routes.get("/members", (req, res) =>
  getMembers(req, res).then(res.send.bind(res))
);

export default routes;
