const express = require("express");
const path = require("path");
require("dotenv").config();

// App de express
const app = express();

// Node Server
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// Mensajes de Sockets
io.on("connection", (client) => {
  console.log("Nuevo cliente conectado");

  client.on("disconnect", () => {
    console.log("Cliente desconectado");
  });

  client.on("message", (payload) => {
    console.log("Mensaje!!!!", payload);

    io.emit("message", { admin: "Nuevo mensaje" });
  });
});

//Path público
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
  if (err) throw new err();

  console.log("Server is running on port", process.env.PORT);
});