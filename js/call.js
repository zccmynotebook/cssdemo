//手动实现call函数
function call(fn,obj,...args){
   if(!obj) obj=globalThis
   obj._temp=fn
   let r=obj._temp(...args)
   delete obj._temp
   return r
}

// let obj={
//     a:1
// }
// function add(a,b){
//     console.log(this)
//     return a+b
// }

// console.log(call(add,obj,1,2))
exports.call =  call