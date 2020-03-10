const express = require('express'),
        app = express(),
        http = require('http').createServer(app),
        io = require('socket.io')(http);

app.set("view engine" , "ejs");
app.use(express.static(__dirname+"/public"));
app.get('/' , (req ,res)=>{
    res.render("index");
})

io.on('connection' , (socket)=>{
    socket.on('chat message' , (msg)=>{
        console.log(msg);
        io.emit('chat message', msg);
    })
})

http.listen(3000 , ()=>{
    console.log("server start working!");
});