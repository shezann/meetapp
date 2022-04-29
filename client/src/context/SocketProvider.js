import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }) {
  const [state, setState] = useState({
    socketId: null,
    localStream: null,
    remoteStream: null,
    screenSharingStream: null,
    allowStrangers: false,
    screenSharingActive: false,
  });
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io("ws://localhost:8000");
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("connected new client!");
      setState({ ...state, socketId: newSocket.id });
    });

    return () => newSocket.close();
  }, []);

  return (
    // TODO: maybe u need to provide the socket here as well but check later
    <SocketContext.Provider value={state}>{children}</SocketContext.Provider>
  );
}
