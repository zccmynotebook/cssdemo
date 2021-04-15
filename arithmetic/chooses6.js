function choose(list){
  if (!Array.isArray(list)) return
  let arr = []
  let len = list.length
  for(let i=0;i<len;i++){
    let min = Math.min(...list)
    arr.push(min)
    let i = list.findIndex(v=>{
      return v==min
    })
    list.splice(i,1)
  }
  return arr
}
console.log(choose([12,1,6,17,20]))