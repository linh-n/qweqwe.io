/* eslint-disable no-console */
/* eslint-disable no-undef */
const express = require("express");
const path = require("path");

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "../publish")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../publish/index.html"));
});

const port = process.env.PORT || 8810;
app.listen(port);

console.log("App is listening on port " + port);
