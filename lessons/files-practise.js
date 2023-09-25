const fs = require('fs')
const path = require('path')

const text = 'HELLO WORLD DUMB'

console.log(text)

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
    if (err) {
      return reject(err.message)
    }
    resolve()
  }))
}

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) => fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      return reject(err.message)
    }
    resolve(data)
  }))
}

const deleteFileAsync = async (path) => {
  return new Promise((resolve, reject) => fs.rm(path, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      return reject(err.message)
    }
    resolve()
  }))
}

writeFileAsync(path.resolve(__dirname, 'text.txt'), `The ENV text is ${text}`)
  .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
  .then(data => data.split(" ").length)
  .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Number of words is ${count}`))
  .then(() => deleteFileAsync(path.resolve(__dirname, 'text.txt')))