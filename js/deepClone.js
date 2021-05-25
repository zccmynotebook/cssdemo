function deepClone(obj){
    //这种方法函数，循环引用，正则类型的值有问题
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
            if(obj.hasownProperty(key)){
                result[key] = deepClone1(obj[key])
            }
        }
        return result
    }else {
        return obj
    }
}