const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 80;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})