const { createServer } = require('http');
const EventEmitter = require('events');

let httpServer = createServer((request, response) => {

});

const customEmitter = new EventEmitter();

customEmitter.on('response', (data)=> {
    console.log('Data Reveived : '+ data);
    // return;
});

customEmitter.on('response', (data)=> {
    console.log('Reesponse Received 1 : '+ data);
});

customEmitter.emit('response', "BABU");
// customEmitter.emit('response', "Aura");