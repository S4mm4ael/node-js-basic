console.log('///Events.js has started!//')

const Emitter = require('events');

const emitter = new Emitter()

emitter.on('message', (data, second, third) => {
  console.log('You send a message' + " " + data);
  console.log('Second argument' + " " + second);
})

const MESSAGE = process.argv[2] || '---'

if (MESSAGE) {
  emitter.emit('message', MESSAGE, 123)
} else {
  emitter.emit('message', 'Message isnt typed')
}