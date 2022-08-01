require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");

const routes = require("./routes");

const app = express();

//middware

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded());

//database
const URL = process.env.MONGODB_URL;
console.log(URL);
mongoose.connect(
  URL,
  {
    autoIndex: false,
  },
  (err) => {
    if (err) throw new Error(err);
    console.log("MongoDB connection");
  }
);
//Routes
app.use("/api", routes);
//Start server

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(process.env.PORT);
  console.log("Express is listening on port " + port);
});
