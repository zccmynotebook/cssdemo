const ft=['零','壹','贰','叁','肆','伍','陆','柒','捌','玖']
let str='20150304698'
str=str.replace(/\d/g,function(){
    return ft[arguments[0]]
})
console.log(str)

let str1="我是{country}人,来自{province},毕业于{college}"
let obj={
    country:'中国',
    province:'山东省',
    college:'北京大学' 
}

function template(str,data){
    let reg=/{(\w+)}/g
    let list=[]
    let r=reg.exec(str)
    while(r){
        list.push({
            str:r[0],
            key:r[1]
        })
    r=reg.exec(str)
    }
    list.forEach(v=>{
        str=str.replace(v.str,data[v.key])
    })
    return str
}
console.log(template(str1,obj))

//方法2
let str2="我是{country}人,来自{province},毕业于{college}"
str2=str2.replace(/{(\w+)}/g,function(content,key){
    return obj[key]
})

console.log(str2)
