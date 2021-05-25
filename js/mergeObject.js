/**
 * 合并对象，同名对象，值是数组
 */
function mergeObject(...args){
    const result = {}
    args.forEach(obj=>{
        Object.keys(obj).forEach(key=>{
            if(result[key]){
                result[key]=[].concat(result[key],obj[key])
            } else {
                result[key]=obj[key]
            }
        })
    })
    return result
}


const obj={
  a:[{x:1},{y:2}],
  b:1
}
const obj1={
    a:[{z:3}],
    b:[2,3],
    c:'test'
}
console.log(mergeObject(obj,obj1))