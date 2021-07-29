var express = require('express');
var app = express();

const mySecret = process.env['MESSAGE_STYLE']

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
//creating / route, which sends a file [...]/views/index.html

app.use("/public", express.static(__dirname + "/public"));
//use the files inside the directory, statically

//lesson 7/12
app.get("/json", (req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
  //request middleware function lesson
  //logs the http verb, the path and the requester's ip then calls the next function to free the stack
})

//lesson 8/12
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({time : req.time});
  //Struggled a bit with the response handler
  //^^^^
  //In the handler, respond with a JSON object, taking the structure {time: req.time}.
});

//lesson 9/12
app.get('/:word/echo', (req, res, next) =>{
  res.send({echo : req.params.word});
  next();
})
//it gets the parameters and send a json with the resquester's echo value, and then free the stack

//lesson 10/12

//my first solution

//app.get('/name', (req, res, next) => {
//  next();
//}, (req, res) => {
//  res.json({name: `${req.query.firstname} ${req.query.lastname}`})   
//})

//2nd approach after seeing the solution

app.get('/name', (req, res, next) => {
  next();
  res.json({name: `${req.query.first} ${req.query.last}`})
})



































 module.exports = app;
