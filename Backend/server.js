// intialize packagest to varibles
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dontenv = require("dotenv");
const app = express();

// create port to use locahost or server
const PORT = process.env.PORT || 8070;

app.use(cors());
// set text to json format
app.use(bodyParser.json());
