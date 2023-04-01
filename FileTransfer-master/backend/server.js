const express = require("express");
//import cors
const cors = require("cors");
const app = express();
const db_connect = require("./config/db_connect");
require("dotenv").config();
//connect to database
db_connect();

//json middle
app.use(express.json());
app.use(cors());
//routes
PORT = process.env.PORT;

// app.get("/hazem",(req,res)=>res.send("hello"))
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is connected")
);
