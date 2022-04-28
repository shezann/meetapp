const socketIO = require("socket.io");

let connectedPeers = [];

exports.sio = (server) => {
  return socketIO(server, {
    transport: ["polling"],
    cors: {
      origin: "*",
    },
  });
};

exports.connection = (io) => {
  io.on("connection", (socket) => {
    console.log("Connected Peers: ", connectedPeers);
    connectedPeers.push(socket.id);

    socket.on("disconnect", () => {
      console.log(`Client ${socket.id} disconnected`);
      connectedPeers = connectedPeers.filter((id) => id !== socket.id);
    });

    socket.on("message", (message) => {
      console.log(`message from ${socket.id}: ${message}`);
    });
  });
};
