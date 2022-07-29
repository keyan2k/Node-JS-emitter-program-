const EventEmitter = require('events');
var eventEmitter = new EventEmitter(); 
eventEmitter.on('myEvent', () => {
   const f = require('./file_C');
const result = f.add('karthi',12345678);

});
eventEmitter.emit('myEvent');














/*
const f = require('./file_C');
const result = f.add(10, 5);

console.log('The result is:', result);
*/