/* add(1) 1
*  add(1)(2) 3
*  add(1)(2,3) 6
*  add(1,2)(3) 6
*  add(1,2,3) 6
*/
function add(){
    let tmpSlice=[].slice,
    params=tmpSlice.apply(arguments)
    function currying(){
        let arr=tmpSlice.apply(arguments)
        params=params.concat(arr) // 合并参数
        return currying
    }
    currying.toString=function(){
        let r=0
        params.forEach(v => {
            r+=v
        });
        return r
    }
    return currying
}

console.log(add(1)(2,3))

console.log(add(1,2,3))

console.log(add(1,2)(3))
