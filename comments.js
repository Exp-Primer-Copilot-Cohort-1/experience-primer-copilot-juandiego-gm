// Create web server

// Import modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// Import own modules
const comments = require("./comments");

// Configure app
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create routes
app.get("/", (req, res) => {
  res.json(comments);
});

app.post("/", (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.put("/:id", (req, res) => {
  const id = req.params.id;
  const comment = req.body;
  comments[id] = comment;
  res.json(comment);
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  comments.splice(id, 1);
  res.json(comments);
});

// Listen to port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});