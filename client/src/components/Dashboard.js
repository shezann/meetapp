import React from "react";
import styled from "styled-components";
import {
  StyledH1,
  StyledButton,
  Checkbox,
  CheckboxContainer,
  Label,
  IconButton,
} from "./utils/CommonStyles";
import { BiCopy } from "react-icons/bi";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <StyledH1>Game with Randoms</StyledH1>
      <StyledText>
        Chat or livestream your games with random players from all over the
        world!
      </StyledText>

      <IdContainer>
        <StyledText>Your streaming ID</StyledText>
        <CodeContainer>
          <StyledCode>DD2EDDDE1</StyledCode>
          <IconButton>
            <BiCopy />
          </IconButton>
        </CodeContainer>
      </IdContainer>

      <StyledText>Enter Friend ID</StyledText>
      <FriendIdInput />
      <ButtonsContainer>
        <StyledButton>Chat</StyledButton>
        <StyledButton>Video Call</StyledButton>
      </ButtonsContainer>

      <StyledText>Chat with a stranger</StyledText>
      <ButtonsContainer>
        <StyledButton>Chat</StyledButton>
        <StyledButton>Video Call</StyledButton>
      </ButtonsContainer>

      <CheckboxContainer>
        <Checkbox type="checkbox" id="allow_strangers" />
        <Label for="vehicle">Allow strangers to chat with you</Label>
      </CheckboxContainer>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  width: 25%;
  height: 100%;
  padding: 1em;
  background: #b993d6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const StyledText = styled.p`
  font-family: "UntitledSans-Regular", sans-serif;
  color: white;
`;

const IdContainer = styled.div`
  height: 100px;
  padding: 0 1.5em;
  padding-bottom: 1em;
  background: rgba(255, 255, 255, 0.2);
  background-filter: blur(80px);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const CodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledCode = styled.p`
  font-family: "UntitledSans-Medium", sans-serif;
  color: white;
  font-size: 2em;
  margin: 0;
`;

const FriendIdInput = styled.input`
  height: 50px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  background-filter: blur(80px);
  padding: 0 1em;
  font-family: "UntitledSans-Regular", sans-serif;
  color: white;
  font-size: 1.5em;
`;

const ButtonsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
