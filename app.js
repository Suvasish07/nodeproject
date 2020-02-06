const express = require('express');
const http = require('http');
const path = require('path');


const app = express();



app.get('/*',(req,res)=>res.sendFile(path.join(__dirname)));


const port = process.env.PORT | 4000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

app.get("/*", (request, response) =>{
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello World\n');
 });
