/* Create a new endpoint “/echo” that allows the client to provide input via an “input” query parameter. For example, to provide the input “foo”, the client would use “/echo?input=foo” as URL path.
As part of this task, create a new function respondEcho that is called if the URL path begins with “/echo”.  Like the respondText and respondJson functions, respondEcho takes the request and response objects as arguments.  It should return a JSON object with the following properties:
normal: the input string as it is (without transformation)
shouty: the input string in all caps
characterCount: the number of characters in the input string
backwards: the input string reversed
 Use the querystring.parse() method to select the input. */
const http = require('http');
const querystring = require('querystring');
const port = process.env.PORT || 1337;

//depending on the URL, the server responds with text, json, or with 404 'Not Found'
const server = http.createServer(function(req, res){
    if(req.url === '/') return respondText(req, res)
    if(req.url === '/json') return respondJson(req, res)
    if(req.url.match(/^\/echo/)) return respondEcho(req, res)

    respondNotFound(req,res)
})
 
server .listen(port)
console.log (`Server listening on ${port}`)

 const respondEcho = (req, res) =>{
     /* const queryObj =querystring.parse(req.url.split('?').slice(1).join('')); 
     const input = queryObj.input; //works the same as  const {input =''} below.*/

     const {input =''} =querystring.parse(req.url.split('?').slice(1).join(''));

     res.setHeader('content-Type', 'application/json');
     res.end(JSON.stringify(
         {
             normal: input,
             shouty:input.toUpperCase(),
             caracterCount:input.length,
             backwards:input.split('').reverse().join('')
         }
     ));
 }
 const respondText = (res)=> {
     res.setHeader('Content-Type', 'text/plain');
     res.end("Hi, I'm an ET");
 }

 const respondJson = (res)=> {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({text: 'I am an object being stringifying', numbers: [1,2,3,]}));
}


//regular expression: /regex/ /^\/echo/ /^/echo/    if (req.url.match(/^\/echo/)) return respondEcho(req, res) 

//object destructuring