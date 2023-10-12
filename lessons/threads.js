console.log('///Threads.js has started!//')
console.log('')

const fs = require('fs')
const path = require('path')

// fs.readFile(path.join(__dirname, '..', 'assets/read.txt'), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data)
// })

const stream = fs.createReadStream(path.join(__dirname, '..', 'assets/read.txt'))

stream.on('data', (chunk) => {
  console.log(chunk)
})
stream.on('end', () => console.log('Reading ended'))
stream.on('open', () => console.log('Reading started'))
stream.on('error', (e) => console.log(e))