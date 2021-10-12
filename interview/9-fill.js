let obj={
    1:123,
    2:223,
    5:555,
    10:101
}
//[123,223,null,null,555,null,null,null,null,101,null,null]
let list=[]
for(let i=0;i<12;i++){
  obj[i+1]?list.push(obj[i+1]):list.push(null)
}
console.log(list)

let list1=new Array(12).fill(null).map((v,i)=>obj[i+1]||null)
console.log(list1)

let obj1={
    ...obj,
    length:13
}
let list2=Array.from(obj1).slice(1).map(v=>v==undefined?null:v)
console.log(list2)