import express, { type Express, type Request, type Response } from "express";
import { createServer } from "http";
import { initializeWebSocketServer } from "./webSocketServer";

const app: Express = express();
const port = 3000;

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

const server = createServer(app);
initializeWebSocketServer(server);

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
