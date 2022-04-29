import React from "react";
import styled from "styled-components";
import { IconButton } from "./utils/CommonStyles";
import {
  BiPhone,
  BiPhoneOff,
  BiMicrophone,
  BiMicrophoneOff,
  BiVideoRecording,
  BiCamera,
  BiCameraOff,
  BiDesktop,
  BiPause,
  BiPlay,
} from "react-icons/bi";

export default function Call() {
  return (
    <CallContainer>
      <VideoContainer>
        <Video autoplay />
        <LocalVideoContainer>
          <LocalVideo muted autoplay />
        </LocalVideoContainer>
        <RecordingButtonsContainer>
          <IconButton>
            <BiPause />
          </IconButton>
          <IconButton>
            <BiPlay />
          </IconButton>
        </RecordingButtonsContainer>
      </VideoContainer>

      <ControlsContainer>
        <IconButton>
          <BiMicrophone />
        </IconButton>
        <IconButton>
          <BiCamera />
        </IconButton>
        <IconButton>
          <BiPhoneOff />
        </IconButton>
        <IconButton>
          <BiDesktop />
        </IconButton>
        <IconButton>
          <BiVideoRecording />
        </IconButton>
      </ControlsContainer>
    </CallContainer>
  );
}

const CallContainer = styled.div`
  width: 50%;
  height: 100%;
`;
const VideoContainer = styled.div`
  position: relative;
  height: calc(100% - 70px);
  margin: 30px 40px 40px 40px;
  border-radius: 15px;
  background: linear-gradient(168.68deg, #0052c9 1.12%, #0a91db 100%);
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;

const LocalVideoContainer = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  background: rgba(196, 196, 196, 0.2);
  top: 15px;
  left: 15px;
`;

const LocalVideo = styled.video`
  width: 100%;
  height: 100%;
`;

const ControlsContainer = styled.div`
  position: absolute;
  width: 395px;
  height: 75px;
  bottom: 40px;
  left: calc(50% - 200px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecordingButtonsContainer = styled.div`
  position: absolute;
  width: 180px;
  height: 50px;
  background: rgba(196, 196, 196, 0.2);
  border-radius: 15px;
  backdrop-filter: blur(60px);
  right: 20px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
