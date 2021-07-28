var express = require('express');
var app = express();

const mySecret = process.env['MESSAGE_STYLE']

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
//creating / route, which sends a file [...]/views/index.html

app.use("/public", express.static(__dirname + "/public"));
//use the files inside the directory, statically

app.get("/json", (req, res) => {
  if(process.env.MESSAGE_STYLE == "uppercase"){
    res.json({message:"Hello json".toUpperCase()});
  }else{
    res.json({message:"Hello json"});
  }
})
//creates /json route, and if MESSA_STYLE equals uppercase, it return HELLO JSON, if not returns Hello json




































 module.exports = app;
