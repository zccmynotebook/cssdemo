/**
 * 将数组拆分成多个size长度的新数组
 * 
 */
function chunk(arr=[],size=1){
    let list=[],tmp=[]
    arr.forEach(v=>{
        if(tmp.length==0){
            //先放入数组，如果tmp.length==3再push，防止出现最后一个不满足的情况
            list.push(tmp)
        }
        tmp.push(v)
        if(tmp.length==size){
            tmp=[]
        }
    })
    return list
}
console.log(chunk([1,2,3,4,5,6,7],3))