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


fs.appendFile(path.resolve(__dirname, 'test.txt'), '1 5 5 6 qwerty 1 2 3', (err) => {
  if (err) {
    throw err
  }
  else {
    console.log("File added")
  }
})


console.log('end')
