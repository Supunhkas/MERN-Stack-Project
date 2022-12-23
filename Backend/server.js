// intialize packagest to varibles
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

// create port to use locahost or server
const PORT = process.env.PORT || 8070;

app.use(cors());
// set text to json format
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.set("strictQuery", false);
mongoose.connect(URL, {
  //   useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MOngo db Connection Succeess");
});

// for connnec with routes
const studentRouter = require("./routes/Students.js");
app.use("/student", studentRouter);

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
