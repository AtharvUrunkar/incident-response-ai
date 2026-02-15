import { createServer } from "@modelcontextprotocol/sdk/server";
import { stdio } from "@modelcontextprotocol/sdk/server/stdio";

const server = createServer({
  name: "incident-log-tool",
  version: "1.0.0"
});

server.tool("get_recent_logs", async ({ service_name }) => {
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify({
          service: service_name,
          error: "Database connection timeout",
          timestamp: new Date().toISOString()
        })
      }
    ]
  };
});

stdio(server);
