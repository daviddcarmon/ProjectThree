// dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const mongojs = require("mongojs");
// const logger = require("morgan");

// configure dotenv
require("dotenv").config();

// new express app
const app = express();

//  middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  routes'
const routes = "./controller/routes";
app.use(routes);

// serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  );
}

// connect to database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/projectthree",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// define PORT
const PORT = process.env.PORT || 5001;

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// start the server
app.listen(PORT, function () {
  console.log(`server running on port http://localhost:${PORT}`);
});
