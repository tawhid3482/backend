const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend with DB is running 🚀");
});

app.get("/users", (req, res) => {
  db.query("SELECT NOW() AS time", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});