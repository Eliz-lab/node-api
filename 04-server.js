//Example 4: dynamic responses
const http = require ('http');

const port = process.env.PORT || 1337;
//console.log(port)

//depending on the URL, the servr responds with text, json, or with 404 'Not Found'
const server = http.createServer(function(req, res){
    if(req.url === '/') return respondText(req, res)
    if(req.url === '/json') return respondJson(req, res)
    respondNotFound(req, res)
})
server.listen(port) 
    console.log(`Server listening on ${port}.`)

function respondText (req, res){
    res.setHeader('Content-Type', 'text/plain')
    res.end('hi')
}
function respondJson (req, res){
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({text:'hello', numbers: [1,2,3]}))
}
function respondNotFound (req, res){
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end('Not Found')
}
/* server.listen(port, () => {
    console.log(`Server listening at http://${hostname}:${port}.`);
}); */