

export default function defineReactive(obj,key,value){
    Object.defineProperty(obj,key,{
        configurable:true,
        enumerable:true,
        get(){
            console.log('get '+key)
            return value
        },
        set(newval){
            console.log('set '+key+' = ' +newval)
            if(newval!=value){
                value =newval
            }
        }
    })
}
defineReactive(obj,'b',123)
obj.b=1
console.log(obj.b)
