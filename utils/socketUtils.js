const socketIO = require("socket.io");

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
        console.log("New client connected");

        socket.on("disconnect", () => {
            console.log(`Client ${socket.id} disconnected`);
        });

        socket.on("message", (message) => {
            console.log(`message from ${socket.id}: ${message}`);
        });
    });
};
