const express = require("express");
//import cors
const cors = require("cors");
const app = express();
const db_connect = require("./config/db_connect");
const usernameGen = require("username-generator");
require("dotenv").config();
//connect to database
db_connect();

//json middle
app.use(express.json());
app.use(cors());
//routes
var PORT = 8000;
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const users = {};

// converts users into a list
const usersList = (usersObj) => {
  const list = [];
  Object.keys(usersObj).forEach((username) => {
    list.push({ username, timestamp: usersObj[username].timestamp });
  });
  return list;
};

// console log with timestamp
function Log(message, data) {
  console.log(new Date().toISOString(), message, data);
}

io.on("connection", async (socket) => {
  socket.on("message", async (message) => {
    io.emit("return", {
      file : message.File
    });
  });
});

// app.get("/hazem",(req,res)=>res.send("hello"))
server.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is connected")
);
