console.log("🔥 BOOTING BLOOMER SOUND TRACKER");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// homepage → frontend
app.get("/", (req, res) => {
  res.redirect("https://bloomersoundtracker.github.io");
});

// health check
app.get("/test", (req, res) => {
  res.json({
    status: "online",
    app: "Bloomer Sound Tracker",
    time: new Date().toISOString()
  });
});

// fake latest data (phase 1)
app.get("/latest", (req, res) => {
  res.json({
    Bloomer: "Unknown Bloom",
    "Phantom Sage": "Echo Drift",
    "Nimbus Garden": "Mist Cycle",
    "SageFNTM": "Signal Fade",
    "Until Ruins": "Final Light"
  });
});

app.listen(PORT, () => {
  console.log("🔥 SERVER RUNNING ON PORT", PORT);
});
