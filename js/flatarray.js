let a=[1,[2,3],[4,[5,[6]]]]
//way 1
console.log(a.flat(Infinity))
//way 2
console.log(JSON.stringify(a).replace(/\[|\]/g,'').split(','))

//way 3
let b=[]
function flatlist(list){
    if (Array.isArray(list)) {
        list.forEach(v=>{
           flatlist(v) 
        })
    } else {
        b.push(list)
    }   
}
flatlist(a)
console.log(b)


//way 4
function flatlist1(list){
     let result = [...list]
     while(result.some(item=>Array.isArray(item))){
         result = [].concat(...result)
     }
     return result
}
console.log(flatlist1(a))

//way 5
a.toString().split(',').map(v=>Number(v))

//way 6
function flatlist2(list){
    while(list.some(v=>Array.isArray(v))){
        list=[].concat(...list)
    }
    return list
}

