import React from "react";
import Main from "./components/Main.jsx";
import { SocketProvider } from "./context/SocketProvider.js";

function App() {
  return (
    <SocketProvider >
      <Main />
    </SocketProvider>
  );
}

export default App;
