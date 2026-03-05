const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let relayState = false;

app.get("/relay/1/status", (req, res) => {
    res.json({ status: relayState });
});

app.post("/relay/1/on", (req, res) => {
    relayState = true;
    res.json({ message: "Relay ON" });
});

app.post("/relay/1/off", (req, res) => {
    relayState = false;
    res.json({ message: "Relay OFF" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});