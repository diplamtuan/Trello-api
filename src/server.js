const express = require("express");
const app = express();

const hostname = "localhost";
const port = 8017;

app.get("/", function (req, res) {
  res.send(`<h1>Hello World NodeJs DipLamTuan</h1>`);
});

app.listen(port, hostname, () => {
  console.log(
    `Hello DipLamTuan, i am running server at http://${hostname}:${port}`
  );
});
