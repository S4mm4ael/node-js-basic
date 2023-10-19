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

const stream = fs.createReadStream(path.join(__dirname, '..', 'assets/read.txt'),)

stream.on('data', (chunk) => {
  console.log(chunk)
})
stream.on('end', () => console.log('Reading ended'))
stream.on('open', () => console.log('Reading started'))
stream.on('error', (e) => console.log(e))

const functionToWrite = () => {

  const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
  for (let i = 0; i < 20; i++) {
    writableStream.write(i + '\n')
  }
  writableStream.end()
  writableStream.close()
  writableStream.destroy()
}

//functionToWrite()

const http = require('http')
http.createServer((req, res) => {
  const stream = fs.createReadStream(path.resolve(__dirname, 'test3.txt'))

  stream.pipe(res)
  // stream.on('data', chunk => res.write(chunk))
  // stream.on('end', chunk => res.end())
})
