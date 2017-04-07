var events = require('events');

var emitter = new events.EventEmitter();//This is a contstructor to create an new instance of the emitter. 


emitter.on('customEvent', function(message, status) {
    console.log(`${status}: ${message}`);

});
emitter.emit('customEvent', "hello world", 200);
