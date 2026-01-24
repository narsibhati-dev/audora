import { WebSocketServer } from "ws";
import { PORT } from "./config";
import { setupSignalingServer } from "./handlers/setupServer";

const HEALTH_PORT = 8001;

// WebSocket Server
const wss = new WebSocketServer({ port: PORT });
setupSignalingServer(wss);

// HTTP Health Check Server (for Docker healthcheck)
Bun.serve({
  port: HEALTH_PORT,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok", service: "signal" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`[ signal ] WebSocket server running on port ${PORT}`);
console.log(
  `[ signal ] Health check server running on http://localhost:${HEALTH_PORT}/health`,
);
