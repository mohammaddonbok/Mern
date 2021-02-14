const express = require("express");
const app = express();
const cors = require('cors');
const { Socket } = require("socket.io");
// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/socket.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);

// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });

io.on("connection", socket=>{
    socket.on("event_from_client",data =>{

        socket.emit('Welcome',data)
    })
    console.log(socket.id);
});