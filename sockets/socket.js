const { io } = require("../index");

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
