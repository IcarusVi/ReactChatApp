import {v4 as uniqueId} from 'uuid'
const express = require('express')
const app = express()
const port = 8000;
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

io.on('connection', (socket) => {
  console.log(`${socket.id} connected`)
  socket.on('message sent', (msg) => {
    console.log(msg)
    io.to(msg.room).emit('message received', msg)
  })

  socket.on('join room', (roomUser) => {
    let room = roomUser.roomName;
    let {userName} = roomUser;
    console.log(`${userName} joined ${room}`)
    socket.join(room);
  })
})

http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



