/**
 *  函数节流throttle：
    函数执行一次后，只有大于设定的执行周期后才会执行下一次；
    适合多次事件按时间做平均分配触发；
    场景：
    resize,scroll,mousemove等
 */

 function throttle(fn,time){
     let start = 0
     return function(e){
        let now = Date.now()
        if(now-start>time){
            fn.call(this,e)
            start = now
        }
     }
 }
 function throttle1(fn,time){
    let timer;
    return function(e){
        if(timer) return
        timer = setTimeout(()=>{
            console.log(this,e)
            fn.call(this,e)
            timer = null
        },time)
    }
}