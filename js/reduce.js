function reduce(arr,fn,init){
    let reslut = init||arr.shift()
    for(let i=0;i<arr.length;i++){
        reslut=fn(reslut,arr[i])
    }
    return reslut
}

console.log(reduce([1,2,3],(a,b)=>{
    return a+b
}))