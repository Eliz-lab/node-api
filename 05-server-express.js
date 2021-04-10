//Example 5: static files in express
const express = require("express");
const app = express();
const querystring = require("querystring");
const fs = require("fs");
//const hostname = "127.0.0.1";
const port = process.env.Port || 1314;

const respondStatic = (req, res)=>{
    const filename = `${_dirname}/public${req.url.split('/static')[1]}`;
    fs.createReadStream(filename)
    .on('error',() => respondNotFound(req, res))
    .pipe(res)
}

const respondEcho = (req, res) => {
    console.log(req.url);
}
//destructured
const {input = ''}= querystring.parse(req.url.split('?').slice(1).join(''));

res.send(JSON.stringify(
    {
        normal: input,
        shouty: input.toUpperCase(),
        characterCount: input.length,
        backwards: input.split(''.reverse().join(''))
    }
));

const respondText = (res) => {
    res.send(' Hello from Mars!!!');
}
const respondJson = (res) => {
    res.send(JSON.stringify({text: 'Hey! Hooo!', numbers:[10,20,30]}));
}
const respondNotFound = (res) => {
    res.send('Not Found');
}

app.get('/', (req, res) =>{
    return respondText(res);
})

app.get('/json', (req, res) =>{
   return respondJson(res);
})
/* app.get('/json', (req, res) =>{
    res.send(JSON.stringify({text: 'Hello from Jupiter!', numbers:[1,2,3]}));
}) */

/* app.get('*', (req, res) =>{
    res.send('Not Found');
}) */

app.get('/echo',(req, res) =>{
    return respondEcho(req, res);
})

app.get('/static/:filename', (req, res) => {
    return respondStatic(req, res);
})
/* app.use('/static', express.static(path.join(__dirname, 'public')))  */

app.get('*', (req, res) =>{
    return respondNotFound(res);
 })

app.listen(port,hostname, () =>{
    console.log(`Server listening at ${port}`);
})