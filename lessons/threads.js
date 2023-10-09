console.log('///Threads.js has started!//')
console.log('')

const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '..', 'assets/read.txt'), (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data)
})