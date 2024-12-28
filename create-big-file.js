const { writeFileSync } = require('fs');

for (let i = 0; i < 100000; i++) {
    writeFileSync('./create-big-file.txt', `Writing Big file : ${i}\n`, {flag : 'a'});    
}