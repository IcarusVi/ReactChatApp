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
    io.emit('message received', msg)
  })
})

http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



