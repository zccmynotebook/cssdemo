function deepClone(obj){
    //这种方法函数，循环引用，正则和函数类型的值有问题
    return JSON.parse(JSON.stringify(obj))
}

let obj={
    a: {
        b:{c:1}
    },
    f: function(){},
    d: new Date(),
    r: /\w+/ig,
    r1: new RegExp('\\w+')
}
let m=deepClone(obj)
m.a.b.c=100
console.log(obj,m)

function deepClone1(obj){
    if(typeof obj=='object' && obj!=null){
        let result = Array.isArray(obj)? []:{}
        for(let key in obj){
            if (obj.hasOwnProperty(key)) {
                if (obj[key] instanceof RegExp) {
                   result[key] = new RegExp(obj[key])
                } else if (obj[key] instanceof Date) {
                   result[key] = new Date(obj[key])
                } else{
                   result[key] = deepClone1(obj[key])
                }               
            }
        }
        return result
    }
    return obj
}