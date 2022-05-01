import React, { useContext, useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import * as constants from "../utils/constants";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

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

      // handle different types of calls and show the incoming call modal
      if (
        type === constants.callType.PC_CHAT ||
        constants.callType.PC_VIDEO ||
        constants.callType.S_CHAT ||
        constants.callType.S_VIDEO
      ) {
        setState({
          ...stateRef.current,
          incomingCall: { status: true, type: type },
        });
        console.log("incoming call modal opened");
      }
    });

    // listen for pre-offer-answer
    newSocket.on("pre-offer-answer", (data) => {
      console.log("pre-offer-answer received from server");
      console.log("data: ", data);
      const { callerId, answer } = data;

      if (answer === constants.preOfferAnswer.CALLEE_NOT_FOUND) {
        // TODO: show dialog to user that callee is not available
        // prolly through a state once again
      }

      if (answer === constants.preOfferAnswer.CALL_UNAVAILABLE) {
        // TODO: show dialog to user that callee is not available
      }

      if (answer === constants.preOfferAnswer.CALL_ACCEPTED) {
        // send webRTC offer to callee
      }

      if (answer === constants.preOfferAnswer.CALL_REJECTED) {
        // show dialog to user that callee rejected the call
      }
    });

    return () => newSocket.close();
  }, []);

  return (
    // TODO: maybe u need to provide the socket here as well but check later
    <SocketContext.Provider value={state}>{children}</SocketContext.Provider>
  );
}
