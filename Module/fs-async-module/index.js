const { readFile, writeFile } = require('fs');
const path = require('path');

console.log("START");


readFile(path.join(__dirname, '../content/first.txt'), 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(result);
    const firstTxt = result;
    readFile(path.join(__dirname, '../content/second.txt'), 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;            
        }
        console.log(result);
        const secondTxt = result;

        writeFile(path.join(__dirname, '../content/result-async.txt'), `This is Async File Write result : 
        ${firstTxt}, ${secondTxt}`, {flag: 'a'}, (err, result) => {
            if(err) {
                console.log(err);
                return;                
            }
            console.log('DONE WITH THE TASK');
        });

        readFile(path.join(__dirname, '../content/result-async.txt'), 'utf8', (err, result)=> {
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
});
console.log('Starting next WITH THE TASK');