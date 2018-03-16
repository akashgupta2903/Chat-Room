var express = require('express');
var socket = require('socket.io');
//App setup
var app = express();
var server = app.listen(4000 , function(){
  console.log("listening at port 4000");
});


//static files
app.use(express.static('public'));


//socket setup
var io = socket(server);

io.on('connection' , function(socket){
  socket.on('chat' , function(data){
    io.sockets.emit('chat' , data);
  });
  socket.on('typing' , function(data){
    socket.broadcast.emit('typing' , data);
  });
});
