// Reading a File Synchronously

const fs = require('fs')

console.log('First line')

let data= fs.readFileSync('f1.txt')

console.log('File 1 Data ->'+data)