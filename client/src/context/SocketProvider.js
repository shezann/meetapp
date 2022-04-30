import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

const handlePreOffer = (data) => {
  console.log("pre-offer came");
  console.log(data);
};

export function SocketProvider({ children }) {
  const [state, setState] = useState({
    socket: null,
    socketId: null,
    localStream: null,
    remoteStream: null,
    screenSharingStream: null,
    allowStrangers: false,
    screenSharingActive: false,
  });

  useEffect(() => {
    const newSocket = io("ws://localhost:8000");

    newSocket.on("connect", () => {
      console.log("connected new client!");
      setState({ ...state, socket: newSocket, socketId: newSocket.id });
    });

    // listen for new peer connections
    newSocket.on("pre-offer", (data) => {
      console.log("pre-offer received from server");
      handlePreOffer(data);
    });

    return () => newSocket.close();
  }, []);

  return (
    // TODO: maybe u need to provide the socket here as well but check later
    <SocketContext.Provider value={state}>{children}</SocketContext.Provider>
  );
}
