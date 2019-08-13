const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

let PORT = process.env.PORT || 8080;

let env = require("dotenv").load;
let app = express();

//app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// dfdfdfdf

app.use(express.static("public"));

app.use("/", express.static(path.join(__dirname, "public/index.html")));

app.use(
  "/portfolio",
  express.static(path.join(__dirname, "public/portfolio.html"))
);

app.use(
  "/contact",
  express.static(path.join(__dirname, "public/contact.html"))
);

let Contact = require("./models/code.js");

console.log("what happened");

app.post("/submit", function (req, res) {
  Contact.create(req.body)
    // .then(res.json("Signed In"))
    .catch(err => res.status(422).json(err));
});

// if (process.env.NODE_ENV === "production") {}
// app.use(routes);

// let databaseURL = "mongodb://localhost/winnieportfolio";

// if (process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect(databaseURL);
// }

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/winnieportfolio2"
);

// let db = mongoose.connection;

// db.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });

// db.once("open", function() {
//   console.log("Mongoose connection is successful");
// });

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
