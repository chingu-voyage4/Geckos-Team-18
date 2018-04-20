var express = require('express');
var socket = require('socket.io');
const path = require('path');
const port = process.env.PORT || 8080;

// App setup

var app = express();
var server = app.listen(path, function() {
  console.log('listening to port ' + port);
});

// socket.io setup

var io = socket(server);
io.on('connection', (socket) => { // link front end to backend-- "connection"
  console.log('socket connection made');
  console.log(socket.id);

  socket.on('SEND_MESSAGE', (data) => { // send message from MessageInput to all Message windows
    console.log(data);
    io.sockets.emit('RECEIVE_MESSAGE', data);

    socket.on('TYPING', (data) => { // send "typing" from MessageInput to all connected except origin
      console.log('someone typing');
      socket.broadcast.emit('SOMEONE_TYPING', data);
    })
  })
})
