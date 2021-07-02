var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var addRouter = require("./routes/add");
var listRouter = require("./routes/list");
var editRouter = require("./routes/edit");
var deleteRouter = require("./routes/delete");

var app = express();

require("dotenv/config");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", addRouter);
app.use("/", listRouter);
app.use("/", editRouter);
app.use("/", deleteRouter);


app.use(function (req, res, next) {
  next(createError(404));
});


app.use(function (err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  
  res.status(err.status || 500);
  res.render("error");
});

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (req, res) => {
    console.log("connected to database");
  }
);

app.listen(3000, () => {
  console.log("listening to 3000");
});

module.exports = app;
