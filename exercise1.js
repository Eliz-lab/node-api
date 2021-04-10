const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.Port || 1338;

const respondText = (res)=> {
    res.setHeader('Content-Type', 'text/plain');
        res.end('Super Cool!');
}

const respondJson = (res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({text: 'Moin Moin', numbers: [11,22,33]}));
}

const respondNotFound = (res) => {
    res.writeHead(404,{'Content-Type': 'text/plain'});
    res.end('Not found at all');

}

const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        return respondText(res);
    }
    if (req.url == '/json'){
        return respondJson(res);
    }
    else {
        respondNotFound(res)
    }
});
server.listen(port, hostname, () =>{
    console.log(`Server listening at http://${hostname}:${port}.`);
});

/* Create a function respondText (for responding with text), a function respondJson (for responding with JSON), and a function respondNotFound (for responding with 404 “Not found”), and refactor 03-server.js in terms of these functions.  Test your code. */