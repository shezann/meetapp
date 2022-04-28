import React, { useState, useRef, useEffect } from "react";
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
    <div>
      <h1>socket.io</h1>
      <button onClick={handleClick}>send message</button>
    </div>
  );
}
