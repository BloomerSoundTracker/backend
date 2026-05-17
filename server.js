console.log("🔥 BOOTING BLOOMER SOUND TRACKER");

const express = require("express");
const cors = require("cors")
const lastKnown = {};

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

app.get("/latest", (req, res) => {
  const currentData = {
    Bloomer: "Unknown Bloom",
    "Phantom Sage": "Echo Drift",
    "Nimbus Garden": "Mist Cycle",
    "SageFNTM": "Signal Fade",
    "Until Ruins": "Final Light"
  };

  const newReleases = [];

  for (const artist in currentData) {
    if (!lastKnown[artist]) {
      lastKnown[artist] = currentData[artist];
      continue;
    }

    if (lastKnown[artist] !== currentData[artist]) {
      newReleases.push({
        artist,
        track: currentData[artist],
        message: `${artist} posted a new track!`
      });

      lastKnown[artist] = currentData[artist];
    }
  }

  res.json({
    updates: newReleases,
    all: currentData
  });
});

app.listen(PORT, () => {
  console.log("🔥 SERVER RUNNING ON PORT", PORT);
});

app.get("/debug", (req, res) => {
  res.json({
    lastKnown
  });
});

