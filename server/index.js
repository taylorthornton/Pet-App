require('dotenv').config();
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use(express.static(path.join(__dirname, "../client/public")));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})