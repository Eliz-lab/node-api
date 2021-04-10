//Example 3: basic routing
const http = require ('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 1337;
//console.log(port)
//calback is called every time is an HTTP to our server
//each time you navigate to http://localhost:1337
//depending on the URL, the server responds with text, json or with 404 'Not found'
const server = http.createServer ((req, res)=>{
    res.statusCode = 200; //everything is ok
    if(req.url === '/'){
        res.setHeader('Content-type', 'text/plain');
        res.end('hi');
        return;
    }
    if (req.url === '/json'){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({text: 'hi', numbers: [1,2,3]}));
        return;
    }
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found');
});
server.listen(port, () => {
    console.log(`Server listening at http://${hostname}:${port}.`);
});

/* Create a function respondText (for responding with text), a function respondJson (for responding with JSON), and a function respondNotFound (for responding with 404 “Not found”), and refactor 03-server.js in terms of these functions.  Test your code. */