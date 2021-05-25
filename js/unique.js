function unique1(arr){
    let list = []
    arr.forEach(v=>{
        if(!list.includes(v)){
            list.push(v)
        }
    })
    return list
}
function unique2(arr){
    let list = [], obj={}
    arr.forEach(v=>{
        if(!obj[v]){
            obj[v]=true
            list.push(v)
        }
    })
    return list
}
function unique3(list){   
    return Array.from(new Set(list))
}
let a=[1,2,1,2]
console.log(unique1(a))
console.log(unique2(a))
console.log(unique3(a))