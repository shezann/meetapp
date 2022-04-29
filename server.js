const http = require("http");
const cors = require("cors");
const express = require("express");
const socketUtils = require("./utils/socketUtils");
const store = require("./utils/store");

const app = express();

const server = http.createServer(app);
const io = socketUtils.sio(server);
socketUtils.connection(io);

const socketIOMiddleware = (req, res, next) => {
  req.io = io;
  next();
};

// CORS
app.use(cors());

// ROUTES
app.use("/api/v1/hello", socketIOMiddleware, (req, res) => {
  req.io.emit("message", `Hello, ${req.originalUrl}`);
  res.send("hello world!");
});

app.use("/getstate", (req, res) => {
  res.send(store.getState());
});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Server started on port ${port}`));
