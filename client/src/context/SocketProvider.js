import React, { useContext, useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import * as constants from "../utils/constants";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

// handle the pre offer thats coming from the server from the caller
let callerDetails;
const handlePreOffer = (data) => {
  const { callerId, type } = data;
  callerDetails = { callerId, type };
  console.log("pre-offer came");

  // handle different types of calls and show the incoming call modal
  if (
    type === constants.callType.PC_CHAT ||
    type === constants.callType.PC_VIDEO ||
    type === constants.callType.S_CHAT ||
    type === constants.callType.S_VIDEO
  ) {
    // handle video call
  }
};

export function SocketProvider({ children }) {
  const [state, setState] = useState({
    socket: null,
    socketId: null,
    incomingCall: { status: false, type: null },
    localStream: null,
    remoteStream: null,
    screenSharingStream: null,
    allowStrangers: false,
    screenSharingActive: false,
  });
  const stateRef = useRef();
  stateRef.current = state;

  useEffect(() => {
    const newSocket = io("ws://localhost:8000");

    newSocket.on("connect", () => {
      console.log("connected new client!");
      setState({ ...state, socket: newSocket, socketId: newSocket.id });
    });

    // listen for new peer connections
    newSocket.on("pre-offer", (data) => {
      console.log("pre-offer received from server");

      const { callerId, type } = data;
      callerDetails = { callerId, type };
      console.log("pre-offer came");

      // handle different types of calls and show the incoming call modal
      if (
        type === "PC_CHAT" ||
        type === "PC_VIDEO" ||
        type === "S_CHAT" ||
        type === "S_VIDEO"
      ) {
        setState({
          ...stateRef.current,
          incomingCall: { status: true, type: type },
        });
        console.log("incoming call modal opened");
      }
    });

    return () => newSocket.close();
  }, []);

  return (
    // TODO: maybe u need to provide the socket here as well but check later
    <SocketContext.Provider value={state}>{children}</SocketContext.Provider>
  );
}
