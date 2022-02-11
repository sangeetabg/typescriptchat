import path from "path";
import express from 'express';
import { createServer } from "http";
import { Server } from "socket.io";

const app = express()
const server = createServer(app);
const io = new Server(server);

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

// server-side
io.on("connection", (socket) => {
    console.log(socket.id); 
  });


 
server.listen(port, ()=>{
    console.log(`server is up on port ${port}`);
})

