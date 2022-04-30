import React, { useState, useRef, useEffect } from "react";
import { useSocket } from "../context/SocketProvider";
import styled from "styled-components";
import Chat from "./Chat";
import Call from "./Call";
import Dashboard from "./Dashboard";
import { Modal } from "@geist-ui/core";

export default function Customers() {
  const state = useSocket();
  const [showModal, setShowModal] = useState(false);
  const socket = state.socket;

  const closeHandler = () => {
    setShowModal(false);
    // TODO: add code for rejecting call
    handleRejectCall();
  };

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

      <Modal visible={state.incomingCall.status} onClose={closeHandler}>
        <Modal.Title>Incoming Call</Modal.Title>
        <Modal.Subtitle>
          <RejectButton onClick={handleRejectCall}>Reject</RejectButton>
          <AcceptButton onClick={handleAcceptCall}>Accept</AcceptButton>
        </Modal.Subtitle>
        <Modal.Content>
          <p></p>
        </Modal.Content>
      </Modal>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`;

const AcceptButton = styled.button`
  background-color: #00b894;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #00d89a;
  }
`;

const RejectButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ff5f5f;
  }
`;
