//const http = require ('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 1337;
const express = require("express");
const app = express();

app.get('/',(req, res) => {
    res.send('Hello, world!');
})

app.get('/json',(req,res) => {
    res.send(JSON.stringify({text: 'Hello from Jupiter!', numbers:[1,2,3]}))
})

app.get('*',(req, res) => {
    res.send('Not Found!');
})

server.listen(port, () => {
    console.log(`Server listening at http://${hostname}:${port}.`);
});
