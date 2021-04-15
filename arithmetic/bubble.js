function bubble(list){
    if (!Array.isArray(list)) return
    //外层控制比较轮数
    for(let i=0;i<list.length-1;i++){
        //内层控制每一轮的比较次数
        for(let j=0;j<list.length-1-i;j++){
            console.log((list[j],list[j+1]))
          if (list[j]<list[j+1]){
            [list[j],list[j+1]] = [list[j+1],list[j]] 
          }
        }
    }
    return list
}
console.log(bubble([12,1,6,17,20]))