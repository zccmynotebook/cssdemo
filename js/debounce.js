/**
 * 防抖：debounce
   在规定时间内，只有最后一次生效，前面的均不生效；
   适合多次事件一次响应的情况；
 */
function debounce(fn,time){
    let timer;
    return function(e){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            console.log(this,e)
            fn.call(this,e)
            timer = null
        },time)
    }
}