//Example one serving plain text
const https = require ('https');
const hostname = '127.0.0.1';
const port = process.env.PORT || 1337;

//calback is called every time is an HTTP to our server
//each time you navigate to http://localhost:1337
const server = https.createServer ((req, res)=>{
    res.statusCode = 200; //everything is ok
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello, World');
});
server.listen(port, hostname, () => {
    console.log(`Server listening at https://${hostname}:${port}.`); //callback
});

//to get the "PIPE" press altGr + "< key" 
//require (in nodejs) ==> import (modules) 
//http : Hypertext Transfer Protocol browsers can make this kind of requests and they understand the response in a same protocol 
//https : Hypertext Transfer Protocol secure 


