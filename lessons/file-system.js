const { rejects } = require('assert')
const fs = require('fs')
const path = require('path')

console.log('start')

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     console.log(err)
//   }
//   else {
//     console.log('Folder is created')
//   }
// })

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     throw err
//   }
//   else {
//     console.log('Deleted')
//   }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'qwerty 1 2 3', (err) => {
//   if (err) {
//     throw err
//   }
//   else {
//     console.log("File added")
//   }
// })


// fs.appendFile(path.resolve(__dirname, 'test.txt'), '1 5 5 6 qwerty 1 2 3', (err) => {
//   if (err) {
//     throw err
//   }
//   else {
//     console.log("File added")
//   }
// })

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
    if (err) {
      return reject(err.message)
    }
    resolve()
  }))
}

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
    if (err) {
      return reject(err.message)
    }
    resolve()
  }))
}

writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
  .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), ' data 2'))
  .catch(err => console.log(err))

console.log('end')
