const app=require("./app");
const dotenv=require("dotenv");
dotenv.config();
const connectDatabase=require("./config/database");

//Handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server");
    process.exit(1);

})

//connecting to database [NOTE: connecting after config file to make sure it gets those variables]
connectDatabase()
.then(()=>{
    const PORT=process.env.PORT || 4000
    const server=app.listen(PORT,()=>{
        console.log(`Server is working on https://localhost:${PORT}`);
    })

    // Socket io setup
    const io = require('socket.io')(server, {
        pingTimeout: 60000,
        cors: {
            origin: `${process.env.FRONTEND}`
        }
    })

    // Connecting to socket.io
    io.on("connection", (socket) => {
        console.log("Connected to socket.io");

        // When user connects
        socket.on('setup', (userData) => {
            socket.join(userData.id);
            socket.emit('connected');
        })

        // When user join chat room
        socket.on('join chat', (room) => {
            socket.join(room);
            console.log("User Joined Room: " + room);
        })

        // When user type
        socket.on('typing', (room) => {
            socket.in(room).emit('typing')
        })

        // When user stop typing
        socket.on('stop typing', (room) => {
            socket.in(room).emit('stop typing')
        })

        // When user receive a new message
        socket.on('new message', (newMessageRecieved) => {
            var chat = newMessageRecieved.chat;

            if (!chat.users) return console.log("chat.users not defined");

            chat.users.forEach((user) => {
                if (user.id == newMessageRecieved.sender._id) return;

                socket.in(user.id).emit("message recieved", newMessageRecieved);
            });

        })
    })
})

process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server");
    
    server.close(()=>{
        process.exit(1);
    });
})