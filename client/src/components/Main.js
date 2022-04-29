import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Chat from "./Chat";
import Call from "./Call";
import Dashboard from "./Dashboard";
import { io } from "socket.io-client";

export default function Customers() {
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8000");

    socket.current.on("connnection", () => {
      console.log("connected to server");
    });
  }, []);

  const handleClick = () => {
    socket.current.emit("message", new Date().getTime());
  };

  return (
    <MainContainer>
      <Dashboard />
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
