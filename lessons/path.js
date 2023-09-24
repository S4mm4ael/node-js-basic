// const path = require('path')

// console.log('Basic', path.join(__dirname, '..', '..'))
// console.log('Resolve', path.resolve('first', 'second', 'third'))

// const fullpath = path.resolve(__dirname, 'first', 'second', 'third.js')
// console.log('Parse', path.parse(fullpath))
// console.log('OS separator', path.sep)
// console.log('Chesk the absolute way', path.isAbsolute('first / second'))
// console.log('File name', path.basename(fullpath))
// console.log('File extension', path.extname(fullpath))

// ------------------
const siteUrl = 'http://localhost:8080/users?id=3456'

const url = new URL(siteUrl)

console.log(url)