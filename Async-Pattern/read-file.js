const { readFile, writeFile } = require('fs').promises;
const path = require('path');
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

console.log("START");

    const firstTxt = async () => {
        try {
            const first =  await readFile(path.join(__dirname, '../Module/content/first.txt'));
            const second =  await readFile(path.join(__dirname, '../Module/content/second.txt'));
            await writeFile(path.join(__dirname, '../Module/content/result-async.txt'), `This is Awesome : ${first}, ${second}`, {flag : 'a'});
            console.log("first : "+ first);
            console.log("second : "+ second);
        } catch (err) {
            console.log(err);
        }
    }
    
    firstTxt();
    
    // const getTxt = (pathUrl) => {
    //     return new Promise ((resolve, reject) => {
    //         readFile(pathUrl, 'utf8', (err, result) => {
    //             if(err) reject(err);
    //             else resolve(result)
    //         });
    //     })
    // };

    // callback hell
    // getTxt (path.join(__dirname, '../Module/content/first.txt'))
    //     .then(result => console.log(result)).catch(err => console.log(err));


// readFile(path.join(__dirname, '../Module/content/first.txt'), 'utf8', (err, result) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(result);
//     // readFile(path.join(__dirname, '../Module/content/second.txt'), 'utf8', (err, result) => {
//     //     if(err){
//     //         console.log(err);
//     //         return;            
//     //     }
//     //     console.log(result);
//     //     const secondTxt = result;

//     //     writeFile(path.join(__dirname, '../Module/content/result-async.txt'), `This is Async File Write result : 
//     //     ${firstTxt}, ${secondTxt}`, {flag: 'a'}, (err, result) => {
//     //         if(err) {
//     //             console.log(err);
//     //             return;                
//     //         }
//     //         console.log('DONE WITH THE TASK');
//     //     });

//     //     readFile(path.join(__dirname, '../Module/content/result-async.txt'), 'utf8', (err, result)=> {
//     //         if(err){
//     //             console.log(err);
//     //             return;
//     //         }
//     //         console.log(result);
//     //     });
//     // });
// });
console.log('Starting next WITH THE TASK');