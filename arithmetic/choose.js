function insert(list){
    if (!Array.isArray(list)) return
    let len = list.length
    for(let i=0;i<len-1;i++){
      for(let j=i+1;j<len;j++){
         if(list[j]>list[i]){
          [list[j],list[i]] = [list[i],list[j]] 
         }
      }
    }
    return list
}
console.log(insert([12,1,6,17,1,20]))