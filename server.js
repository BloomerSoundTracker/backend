import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Fake tracked data (we'll replace later)
const artists = [
  "Bloomer",
  "Nimbus Garden",
  "SageFNTM",
  "Phantom Sage",
  "Until Ruins"
];

// Simulated "latest tracks"
let latest = {
  Bloomer: "Unknown Bloom",
  "Nimbus Garden": "Mist Cycle",
  "SageFNTM": "Signal Fade",
  "Phantom Sage": "Echo Drift",
  "Until Ruins": "Final Light"
};

// GET latest tracks
app.get("/latest", (req, res) => {
  res.json(latest);
});

// Simulated check endpoint (we upgrade later)
app.get("/check", (req, res) => {
  res.json({
    message: "Tracker running",
    artists: artists.length
  });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
