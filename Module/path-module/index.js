const path = require('path');



// path
console.log("path.sep : " + path.sep);

const filePath = path.join('/content', 'subFolder', 'test.txt');
console.log(filePath);

const baseFile = path.basename(filePath);
console.log(baseFile);

const absolutePath = path.resolve(__dirname,filePath);
console.log(absolutePath);
