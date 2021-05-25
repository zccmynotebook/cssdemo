function every(arr,fn){
    for(let i=0;i<arr.length;i++){
        if(!fn(arr[i])){
            return false
        }
    }
    return true
}

console.log(every([1,2,3],(a)=>{
    return a>0
}))

function some(arr,fn){
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i])){
            return true
        }
    }
    return false
}