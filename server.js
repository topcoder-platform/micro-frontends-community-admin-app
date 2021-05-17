/* global process */
/**
 * Community Admin backend server
 */
import express from "express";
import bodyParser from "body-parser";
// import betaTesters from "./src/api/routes/betaTesters.js";
import recruitHooks from "./src/api/routes/recruitHooks.js";

const app = express();

// static site serve
app.use(
  "/community-admin-app",
  express.static("./dist", {
    setHeaders: function setHeaders(res) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    },
  })
);

// plugins
app.use(bodyParser.json());

// API routes
// app.use("/api/testers", betaTesters); TODO for v2
app.use("/api/hooks/", recruitHooks);

// ping route
app.get("/", function (req, res) {
  res.send("alive");
});

const PORT = process.env.PORT || 8505;
app.listen(PORT);
console.log(`App is hosted on port ${PORT}.`); // eslint-disable-line no-console
