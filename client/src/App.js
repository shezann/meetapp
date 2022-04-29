import React from "react";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import Main from "./components/Main.jsx";
import { SocketProvider } from "./context/SocketProvider.js";

function App() {
  return (
    <GeistProvider>
      <CssBaseline>
        <SocketProvider>
          <Main />
        </SocketProvider>
      </CssBaseline>
    </GeistProvider>
  );
}

export default App;
