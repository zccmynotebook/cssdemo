const events = require('events')
let e=new events.EventEmitter()
 
e.on('hello',(e)=>{
    console.log(e)
})
//注意位置，先监听，再触发；
e.emit('hello','js')