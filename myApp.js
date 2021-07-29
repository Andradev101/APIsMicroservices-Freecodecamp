var express = require('express');
var app = express();

const mySecret = process.env['MESSAGE_STYLE']

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
//creating / route, which sends a file [...]/views/index.html

app.use("/public", express.static(__dirname + "/public"));
//use the files inside the directory, statically

app.get("/json", (req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
  //lesson 7/12
  //request middleware function lesson
  //logs the http verb, the path and the requester's ip then calls the next function to free the stack
})

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({time : req.time});
  //Struggled a bit with the response handler
  //^^^^
  //In the handler, respond with a JSON object, taking the structure {time: req.time}.
});



































 module.exports = app;
