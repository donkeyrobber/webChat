const redis = require('redis');
const express = require('express');
const app = express();
const server = app.listen(3000, () => {
    console.log(`server up`);
});
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});
const subscriber = redis.createClient('6379','redis');

subscriber.on("subscribe", function(channel, count) {
    console.log(`Subscribing to ${channel}`);
});
subscriber.subscribe("chat");

io.on('connection', socket => {
    console.log(`New user has joined!`);
    subscriber.on("message", (channel, message) => {
        socket.emit("messageChannel", message);
        console.log("messageChannel", message);
    });

});

app.get('/clients', (req, res) => {
    res.send('here');
});






