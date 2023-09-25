const fs = require('fs')
const path = require('path')

console.log('start')

fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log('Folder is created')
  }
})

console.log('end')
