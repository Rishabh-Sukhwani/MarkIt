const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');
    io.emit('clear', "");


    socket.on('input', (data) => {
        console.log('input: ' + data);
        io.emit('output', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    })
})

http.listen(3000, () => {
    console.log('Server listening on port 3000');
});