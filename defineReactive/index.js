let obj = {}
Object.defineProperty(obj,'a',{
    value:1

})

console.log(Object.getOwnPropertyDescriptor(obj,'a'))
for(i in obj){
    console.log(i)
}