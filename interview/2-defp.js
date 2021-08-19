let val=0
Object.defineProperty(window,'a',{
    get(){
        return ++val
    }
})
if(a===1&a===2&a===3){
    console.log('默认类型转换')
}