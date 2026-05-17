console.log("🔥 SERVER BOOTING");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.redirect("https://bloomersoundtracker.github.io");
});

app.get("/test", (req, res) => {
  res.json({
    status: "online",
    service: "bloomer-sound-tracker",
    time: new Date().toISOString()
  });
});

app.get("/latest", (req, res) => {
  res.json({
    Bloomer: "Unknown Bloom",
    "Phantom Sage": "Echo Drift",
    "Nimbus Garden": "Mist Cycle"
  });
});

app.listen(PORT, () => {
  console.log("🔥 LISTENING ON PORT", PORT);
});
