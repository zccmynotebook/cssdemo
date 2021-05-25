/**
 * 删除count个元素，返回剩余数组
 * @param {*} arr 
 * @param {*} count 
 */
function drop(arr,count){
    return arr.filter((v,index)=>{
        return index>=count
    })
}