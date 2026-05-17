import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

console.log("BOOTING bloomer-sound-tracker");

// ✅ homepage redirect
app.get("/", (req, res) => {
  res.redirect("https://bloomersoundtracker.github.io");
});

// ✅ health check
app.get("/test", (req, res) => {
  res.json({
    status: "online",
    service: "bloomer-sound-tracker",
    time: new Date().toISOString()
  });
});

// ✅ test data
app.get("/latest", (req, res) => {
  res.json({
    Bloomer: "Unknown Bloom",
    "Phantom Sage": "Echo Drift",
    "Nimbus Garden": "Mist Cycle"
  });
});

// ⚠️ MUST be last
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
