// minimal Hello, world example
require('http')
.createServer((req,res) => res.end('Hello, world!'))
.listen(8080)