//先取一个，再取一个和已取的比较，放到合适位置
function insert(list){
    if (!Array.isArray(list)) return
    let init = list[0] 
    let arr = [init]
    for(let i=1;i<list.length;i++){
        for(let j=arr.length-1;j>=0;j--){
            if(arr[j]<=list[i]){
                arr.splice(j+1,0,list[i])
                break
            } 
            if(j==0){
                arr.unshift(list[i])
            }
            
       }
    }
    return arr
}
console.log(insert([12,1,6,17,20]))

function insert1(arr){
    if (!Array.isArray(arr)) return
    for(let i=1;i<arr.length;i++){
        let start=arr[i]
        let j=i-1

        while(j>=0&&arr[j]>start){
            arr[j+1]=arr[j]
            j--              
       }
        //插入当前位置右侧
          arr[j+1]=start   
    } 
    return arr
}
console.log(insert1([12,1,6,17,20]))
