console.log('///Events.js has started!//')
console.log('')

const Emitter = require('events');

const emitter = new Emitter()

emitter.once('message', (data, second, third) => {
  console.log('You send a message' + " " + data);
  console.log('Second argument' + " " + second);
})

const MESSAGE = process.argv[2] || '---'

emitter.emit('message')
emitter.emit('message')
emitter.emit('message')
emitter.emit('message')
emitter.emit('message')

emitter.removeAllListeners()
emitter.removeListener('message', () => { })

// if (MESSAGE) {
//   emitter.emit('message', MESSAGE, 123)
// } else {
//   emitter.emit('message', 'Message isnt typed')
// }