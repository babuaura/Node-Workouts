// Global - No Window !!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (commonJS)
// modules - info about current module(file)
// process - info about env where a program is being excuted

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <package name>

// global dependency - use it in any project
// npm install -g <package name>
// sudo npm install -g <package name> (mac)

// package.json - manifest file (stores important info about project / package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default) 

console.log("__dirname : " + __dirname);
console.log("__filename : " + __filename);

setInterval(function(){
console.log("__dirname : " + __dirname);
}, 5000);

setTimeout(function(){
    console.log("__filename : " + __filename);
}, 3000)

// Requiring the lodash module
// in the script
const _ = require("lodash");
let arr = [1, 2, 3, 4, 5, 6];

// Making chunks of size 1
console.log(_.chunk(arr, 2));

console.log("babu");
console.log("babu");
