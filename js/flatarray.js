let a=[1,[2,3],[4,[5,[6]]]]
console.log(a.flat(Infinity))
console.log(JSON.stringify(a).replace(/\[|\]/g,'').split(','))
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

function flatlist1(list){
     let result = [...list]
     while(result.some(item=>Array.isArray(item))){
         result = [].concat(...result)
     }
     return result
}
console.log(flatlist1(a))