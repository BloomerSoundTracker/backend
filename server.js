console.log("🔥 FILE IS RUNNING: server.js LOADED");

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("HOME ROUTE WORKS");
});

app.get("/test", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log("🔥 SERVER LISTENING ON PORT", PORT);
});
