var http = require('http');

http.createServer((request,response) =>{
    response.write('<h1>Hello Node!!!!</h1>\n')
    response.end();
}).listen(3000);


// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');