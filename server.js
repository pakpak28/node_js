// Написать node.js код, который на заданный URL шлет любой GET запрос

// Написать node.js код, который на заданный URL шлет любой POST запрос

// Написать node.js код, который на заданный URL шлет POST запрос с заголовком: WhatWillSaveTheWorld: Love

const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    console.log("this is get request");
  }
  if (req.method == "POST") {
    console.log("this is post request");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
