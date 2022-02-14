const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('anithing', (data) => console.log(data));
emitter.emit('anithing', { a: 1 });
