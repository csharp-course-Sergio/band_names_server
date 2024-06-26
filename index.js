const express = require("express");
const path = require("path");
require("dotenv").config();

// App de express
const app = express();

// Node Server
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);

require("./sockets/socket");

//Path público
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
  if (err) throw new err();

  console.log("Server is running on port", process.env.PORT);
});
