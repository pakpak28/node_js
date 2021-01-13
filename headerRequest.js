const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;

const options = {
  host: "127.0.0.1",
  path: "/",
  port: "8080",
  method: "POST",
  headers: {
    WhatWillSaveTheWorld: "Love",
  },
};

callback = function (response) {
  let str = "";

  response.on("data", function (chunk) {
    str += chunk;
  });

  response.on("end", function () {
    console.log(str);
  });
};

const req = http.request(options, callback);

req.write("post request from js");
req.end();
