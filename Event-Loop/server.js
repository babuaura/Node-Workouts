const { createServer } = require('http');

// const server = createServer((req,res) => {

// });

// server.listen(5000);

createServer((request,response) => {
    console.log(request.url);
    
    if(request.url === '/') response.end('welcome to our home page');
    else if(request.url === '/about') response.end('here is our short history');
    else response.end(`<h1>Oops!!!</h1>
        <p> We can't seem to find the page you are looking for </p>
        <a href='/'>back</a>`);
    // response.write('welcome to our home page');
    // response.end();
}).listen(5000);