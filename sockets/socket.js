const { io } = require("../index");

// Mensajes de Sockets
io.on("connection", (client) => {
  console.log("Nuevo cliente conectado");

  client.on("disconnect", () => {
    console.log("Cliente desconectado");
  });

  client.on("emit-new-message", (payload) => {
    client.broadcast.emit("new-message", payload);
  });
});
