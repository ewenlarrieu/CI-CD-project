const express = require("express");

const app = express();
const PORT = 3000;

app.get("/api/hello", (req, res) => {
  res.json({ message: "test world 2" });
});

app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port${PORT}`);
});
