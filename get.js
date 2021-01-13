const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;

const options = {
  host: "127.0.0.1",
  path: "/",
  port: "8080",
  method: "GET",
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

http.request(options, callback).end();
