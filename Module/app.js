// CommonJs, every file is a module(by default)
// Modules -Encapsulated code (only share minimum)
// Build - in Modules
// 1. OS - Operating System
// 2. PATH
// 3. FS
// 4. HTTP

// sayHi(secret);
// sayHi(jhon);
// sayHi(babu);

const names = require('./names');
const sayHiFunction = require('./utils')
const flavor = require('./flavor');
const addFunction = require('./mind-grenade');
// console.log(names);

// sayHiFunction('Aura');
// sayHiFunction(names.john);
// sayHiFunction(names.babu);
