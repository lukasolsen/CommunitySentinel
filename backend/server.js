const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/register", (req, res) => {
  res.send(req.body);

  // Dette er routing, så her blir linken http://127.0.0.1:3000/spin
  res.send("Spinning!"); //

  //Skriv videre behandling her med req param
});

app.listen(port);
