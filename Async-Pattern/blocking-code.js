const {createServer} = require('http');

createServer((req, res) => {
    console.log(req.url);
    
    if(req.url === '/') {
        res.end("Home Page");
    }
    else if(req.url === '/about') {
        // Blocking Code..
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`i : ${i}, j : ${j}`);
            }            
        }
        res.end("About Page");
    } 
    else{
        res.end("Error Page");
    }
}).listen(5000, () => {
    console.log("Server Listening on port 5000");
});