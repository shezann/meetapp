let state = {
  socketId: null,
  localStream: null,
  remoteStream: null,
  screenSharingStream: null,
  allowStrangers: false,
  screenSharingActive: false,
};

exports.setSocketId = (socketId) => {
  state = { ...state, socketId };
};

exports.setLocalStream = (stream) => {
  state = { ...state, localStream: stream };
};

exports.setRemoteStream = (stream) => {
  state = { ...state, remoteStream: stream };
};

exports.setScreenSharingStream = (stream) => {
  state = { ...state, screenSharingStream: stream };
};

exports.setAllowStrangers = (allowStrangers) => {
  state = { ...state, allowStrangers };
};

exports.setScreenSharingActive = (screenSharingActive) => {
  state = { ...state, screenSharingActive };
};

exports.getState = () => {
  return state;
};
