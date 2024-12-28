const { time, timeEnd } = require("console");
console.log("first task");
time();
// for (let index = 0; index < 1000000; index++) {
//     // const element = document.querySelector;
    
// }
setTimeout(() => {
    console.log("second task");
    
}, 1);
timeEnd();

console.log("end task");

