import React, { useState, useRef, useEffect } from "react";
import { useSocket } from "../context/SocketProvider";
import styled from "styled-components";
import Chat from "./Chat";
import Call from "./Call";
import Dashboard from "./Dashboard";

export default function Customers() {
  const state = useSocket();
  const socket = state.socket;

  const sendPreOffer = (friendId, type) => {
    console.log("emitting pre offer to server");
    socket.emit("pre-offer", { friendId, type });
  };

  return (
    <MainContainer>
      <Dashboard id={state.socketId} sendPreOffer={sendPreOffer} />
      <Call />
      <Chat />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`;
