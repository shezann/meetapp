const socketIO = require("socket.io");
const store = require("./store");

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
    connectedPeers.push(socket.id);
    store.setSocketId(socket.id);
    console.log("Connected Peers: ", connectedPeers);

    socket.on("pre-offer", (data) => {
      console.log("pre-offer came");
      const { friendId, type } = data;
      const connectedPeer = connectedPeers.find((id) => id === friendId);
      // send offer to friend if he is connected
      if (connectedPeer) {
        const data = {
          callerId: socket.id,
          type,
        };
        io.to(connectedPeer).emit("pre-offer", data);
      } else {
      }
    });

    socket.on("disconnect", () => {
      console.log(`Client ${socket.id} disconnected`);
      connectedPeers = connectedPeers.filter((id) => id !== socket.id);
    });

    socket.on("message", (message) => {
      console.log(`message from ${socket.id}: ${message}`);
    });
  });
};
