const express = require('express');
const socket = require('socket.io');
const path = require('path');
const port = process.env.PORT || 8080;

// App setup
const app = express();
const server = app.listen(port, function() {
  console.log('listening to port ' + port);
});

// socket.io setup
const io = socket(server);
let users = [];


io.on('connection', (socket) => { // link front end to backend-- "connection"

  // within this scope, socket refers to an individual client's connection
  // with the server. Each socket has a unique id parameter that is used
  // throughout the function to perform CRUD operations on the users object.
  console.log(`socket connection made ${socket.id}`);

  // When a person joins the chat room, inform the user that they have
  // successfully connected, display a message on all sockets informing
  // users that someone has joined, and add their handle(name) to the
  // users object.

  socket.on('join', (name) => {
    users.push( { id: socket.id, name });
    socket.emit('update', 'You have connected');
    io.sockets.emit('update', `${name} has joined the chat room.`);
    io.sockets.emit('update-users', users);
    console.log(users);
  });

  // When a person sends a message, the server should emit an event that sends
  // that message out to all sockets.
  socket.on('SEND_MESSAGE', (data) => {
    console.log(data);
    io.sockets.emit('RECIEVE_MESSAGE', data.message, data.fromWhatUser);
  });

  // When a person disconnects, update the users object, delete the client id
  // from the poeple object, and emit an event to all sockets with the updated
  // users object.
  socket.on('disconnect', () => {
    io.sockets.emit('update', users[socket.id] + 'left the chat room.');
    delete users[socket.id];
    io.sockets.emit('update-users', users);
  });


  // send "typing" from MessageInput to all connected except origin
  socket.on('TYPING', (data) => {
    console.log('someone typing');
    socket.broadcast.emit('SOMEONE_TYPING', data);
  });
});

module.exports = io;
