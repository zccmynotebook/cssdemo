// let m1=require('./m1.js')
// console.log(m1)
// let obj=require('./m2.js')
// console.log('index ',obj)

//console.log(module)
// console.log(__filename,__dirname)
// console.log(arguments.callee +'')
//console.log(module.exports===exports)

let m3=require('./m3.js')
console.log(typeof m3)
let obj=require('./m3.js')
console.log('index ',m3===obj)
m3.types='js'
console.log(obj)