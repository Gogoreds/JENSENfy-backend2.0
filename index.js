require("dotenv").config();
const express = require("express");
const app = express();
const port = 8888;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// to test the dotenv
// console.log(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

app.get("/", (req, res) => {
  const data = {
    name: "Hola",
    isAwesome: true,
  };

  res.json(data);
});

app.get("/login", (req, res) => {
  res.redirect(
    `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
