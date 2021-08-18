const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const Cors = require("cors");

const app = express();
const server = http.createServer(app);
// const io = socketio(server);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("chat", (data) => {
    io.sockets.emit("chat", data); // veriyi bütün clientlere dağıtıyor
  });
});

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started.`)
);
