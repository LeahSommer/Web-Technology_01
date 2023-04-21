/*const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer((request, response) => {
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, {
      "Content-Type": "text/html",
    });
    let responseMessage = "<h1>Hello, Universe!</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
  });
app.listen(port);
console.log(`The server has started and is listening on port number:
➥ ${port}`);*/
const port = 3000,
 http = require("http"),
 httpStatus = require("http-status-codes"),
 router = require("./router"),
 contentTypes = require("./contentTypes"),
 utils = require("./utils");
 
 router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.htm);
  utils.getFile("views/index.html", res);
 });
 
http.createServer(router.handle).listen(port);
console.log(`The server is listening on
➥ port number: ${port}`);