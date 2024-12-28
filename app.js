const { createReadStream } = require('fs');

const stream = createReadStream('./create-big-file.txt', {
    highWaterMark : 90000,
    encoding : 'utf8'
});

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (result) => {
    console.log(result);
})