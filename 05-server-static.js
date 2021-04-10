//Example 5: serving static files express
//1.in your project's root directory, create a directory 'public'.
//2. in public, put an index.html file with this content (see chat) and
//an image of your choice

const http = require("http");
const querystring = require("querystring");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = process.env.Port || 1314;
//const express = require("express");
//const app = express();

const server = http.createServer(function(req, res){
    if(req.url === '/') return respondText(req, res)
    if(req.url === '/json') return respondJson(req, res)
    if(req.url.match(/^\/echo/)) return respondEcho(req, res)
    if(req.url.match(/^\/static/)) return respondStatic(req, res)
    
    respondNotFound(req,res)
})

server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}.`);
});

const respondText = (res) => {
    res.setHeader("Content-Type", "text/plain");
       res.end("Super Cool!");
}
const respondJson = (res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ text: "Moin" , numbers: [11, 22, 33]}));
}
const respondEcho = (req, res) => {
   const {input = ""} = querystring.parse(req.url.split("?").slice(1).join(""));
res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(
        {
            normal: input,
            shouty: input.toUpperCase(),
            characherCount: input.length,
            backwards: input.split("").reverse().join("")
        }
    ));
}
function respondStatic(req, res) {
    const filename = `${__dirname}/public${req.url.split("/static")[1]}`
  fs.createReadStream(filename)
  .on("error", () => resopndNotFound(req, res))
  .pipe(res)
}
const respondNotFound = (res) => {
    res.writeHead(404, { "Content-Type": "text/plain"});
    res.end("Not found at all");
}