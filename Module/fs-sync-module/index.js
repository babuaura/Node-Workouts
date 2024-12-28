const { readFileSync, writeFileSync} = require('fs');
console.log('start');

const path = require('path');

// const path = 
const firstTxt = readFileSync(path.join(__dirname, '..', '/content/first.txt'), 'utf8');
const secondTxt = readFileSync(path.join(__dirname, '..', '/content/second.txt'), 'utf8');

console.log(firstTxt, secondTxt);

const writeFile = writeFileSync(path.join(__dirname, '..', '/content/result-sync.txt'),
    `here is the result : ${firstTxt} -- ${secondTxt}`, {flag : 'a'}
);

console.log("done with the task");
console.log("starting next one");
