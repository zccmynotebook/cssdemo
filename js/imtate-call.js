Function.prototype.icall=function(){
  console.log(this)
}
var obj={name:'test'}
function f(){
   console.log(this)
}
f.icall(obj)