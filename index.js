var express = require('express');
var socket = require('socket.io');
// var http = require('http').Server(app);
// app setup
var app = express();

//to serve statc files (looks for public folder to serve static files like css)
app.use(express.static('public'));

//server
var server = app.listen(3000,function(){
  console.log("listening to port 3000!");
});

//socket setup
var io = socket(server);

io.on('connection',function(socket){

  console.log("connection established",socket.id);
  socket.on('chat',function(data){
    io.sockets.emit('chat',data);
  });
  socket.on('typing',function(data){
    socket.broadcast.emit('typing',data);
  })
});
