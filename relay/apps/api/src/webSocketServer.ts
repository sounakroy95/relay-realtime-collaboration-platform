import { WebSocketServer, WebSocket } from "ws";
import type { Server } from "http";

export const initializeWebSocketServer = (server: Server) => {
  const wss = new WebSocketServer({ server });

  console.log("Web Socket Server initialized");

  wss.on("connection", (ws: WebSocket) => {
    console.log("New client connected");

    //sending a welcome message
    ws.send(
      JSON.stringify({
        type: "WELCOME",
        message: "Connected to WebSocket server!",
      })
    );

    //listen for incoming message
    ws.on("message", (data) => {
      const message = data.toString();
      console.log("Received:", message);

      ws.send(
        JSON.stringify({
          type: "MESSAGE",
          message: `Server received: ${message}`,
        })
      );
    });

    //closing a connection
    ws.on("close", () => {
      console.log("Client Disconnected");
    });

    //handling errors
    ws.on("error", (error) => {
      console.error("Websocket error", error);
    });
  });

  return wss;
};
