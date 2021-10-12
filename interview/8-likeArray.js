// Array.prototype.push=function(val){
//     this[this.length]=val
//     //length自动+1
//     return this.length
// }

var obj={
    3:123,
    2:111,
    length:2,
    push: Array.prototype.push
}
obj.push('a')
obj.push('b')
console.log(obj)
