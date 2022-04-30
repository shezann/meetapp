import React, { useState, useRef, useEffect } from "react";
import { useSocket } from "../context/SocketProvider";
import styled from "styled-components";
import Chat from "./Chat";
import Call from "./Call";
import Dashboard from "./Dashboard";

export default function Customers() {
  const state = useSocket();
  const socket = state.socket;

  console.log(state);

  const sendPreOffer = (friendId, type) => {
    console.log("emitting pre offer to server");
    socket.emit("pre-offer", { friendId, type });
  };

  // show accept and decline buttons
  const handleAcceptCall = () => {
    console.log("call accepted");
  };
  const handleRejectCall = () => {
    console.log("call rejected");
  };

  return (
    <MainContainer>
      <Dashboard id={state.socketId} sendPreOffer={sendPreOffer} />
      <Call />
      <Chat />
      {/* TODO: draw modals for incoming calls */}
      {state.incomingCall.status && (
        <div>
          <button onClick={handleAcceptCall}>Accept</button>
          <button onClick={handleRejectCall}>Reject</button>
        </div>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`;
