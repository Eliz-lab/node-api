//const http = require ('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 1337;
const express = require("express");
const app = express();
/* const server = http.createServer ((req, res)=>{
    res.statusCode = 200; //everything is ok
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({text: 'hi', numbers: [1,2,3]}));
}); */

app.get('/json',(req,res) => {
    res.send(JSON.stringify({text: 'Hello from Jupiter!', numbers:[1,2,3]}))
})

server.listen(port, () => {
    console.log(`Server listening at http://${hostname}:${port}.`);
});
