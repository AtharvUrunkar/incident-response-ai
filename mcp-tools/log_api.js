import express from "express";

const app = express();
app.use(express.json());

app.post("/logs", (req, res) => {
  const id = req.body.id || 1;
  const service = req.body.params?.service || "unknown";

  res.json({
    jsonrpc: "2.0",
    id: id,
    result: {
      service,
      logs: [
        "ERROR: Database connection timeout",
        "WARN: Retry attempt failed",
        "ERROR: Transaction processing failure"
      ]
    }
  });
});

app.listen(5001, () => {
  console.log("Log MCP tool running on http://localhost:5001/logs");
});
