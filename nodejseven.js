const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('Please turn of moter!');

  setTimeout(() => {
  console.log('Please turn of moter! Its gentlr reminder');
    
  }, 3000);

});

myEmitter.emit("WaterFull");

// myEmitter.emit('event');