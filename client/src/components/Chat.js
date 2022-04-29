import React from "react";
import styled from "styled-components";

export default function Chat() {
  return (
    <ChatContainer>
      <MessagesContainer></MessagesContainer>
      <NewMessageContainer>
        <MessageInput type="text" placeholder="Send a text" />
        <SendButton>Send</SendButton>
      </NewMessageContainer>
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  width: 25%;
  height: 100%;
  background: #f4f9fd;
  display: flex;
  flex-direction: column;
`;

const MessagesContainer = styled.div`
  flex-grow: 1;
  margin: 40px 30px;
  overflow-y: scroll;
`;

const NewMessageContainer = styled.div`
  position: relative;
`;

const MessageInput = styled.input`
  margin: 0 40px;
  margin-bottom: 30px;
  width: calc(100% - 80px);
  height: 60px;
  color: #676f7a;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #d5deeb;
  border-radius: 15px;
  box-shadow: 0px 2px 20px 5px rgba(10, 145, 219, 0.05);
  padding: 0 60px 0 20px;
  z-index: 2;
  &:focus {
    outline: none;
    color: #676f7a;
  }
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 50px;
  top: 10px;
  box-shadow: 0px 2px 20px 5px rgba(10, 145, 219, 0.05);
  background: linear-gradient(180deg, #ff9519 0%, #ffba6a 100%);
  border-radius: 8px;
  transition: 0.5s;
`;
