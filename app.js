var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const http = require("http");
var app = express();
const server = http.createServer(app);
const cors = require("cors");

const productRouter = require("./api/router/product.router");
const cartRouter = require("./api/router/cart.router");
const userRouter = require("./api/router/user.router");

mongoose
  .connect(process.env.CONNECTION_URI, {
    dbName: "fake-store",
  })
  .then(() => {
    console.log("Connection to the Atlas Cluster is successful!");
  })
  .catch((err) => console.error(err));

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ALL API ENDPOINTS
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hellloooo</h1>");
});

const port = process.env.PORT;
server.listen(5000, () => {
  console.log(`App is listening on ${port}`);
});

module.exports = app;
