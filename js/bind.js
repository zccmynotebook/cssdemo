//手动实现bind函数
const call = require('./call.js').call
function bind(fn,obj,...args){
   if(!obj) obj=globalThis 
   return (...args1)=>{
      call(fn,obj,...args,...args1)
   }
}

let obj={
    a:1
}
function add(a,b){
    console.log(this)
    return a+b
}

console.log(bind(add,obj,1,2)())
console.log(bind(add,obj)(1,2))

