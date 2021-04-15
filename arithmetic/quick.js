function quick(list){
    if (!Array.isArray(list)) return
    if(list.length<=1) return list
    let i = Math.floor(list.length/2)
    let mid=list.splice(i,1)[0]
    let left=[],right=[]
    for(let i=0;i<list.length;i++){
      list[i]>mid?right.push(list[i]):left.push(list[i])
    }
   return quick(left).concat(mid,quick(right)) 
}
console.log(quick([12,1,6,17,20]))