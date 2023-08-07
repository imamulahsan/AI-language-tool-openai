const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenv
dotenv.config();

//mongo connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));


const PORT = process.env.PORT || 8080;

//listen server
app.listen(8080, () =>{
    console.log( `Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan.white);
})