let a={
    val:0,
    toString(){
          console.log('string')
        return ++this.val
    },
    valueOf(){
        console.log('value')
        return ++this.val
    },
    
}
// if(a=='1'&a==2&a=='A'){
//     console.log('默认类型转换')
// }
if(a=='1'&a==2&a==3){
    //优先使用valueOf,没有再查找toString
    console.log('默认类型转换')
}
//value,value,value,默认类型转换

let b=[1,2,3]
b.toString=b.shift
if(b==1&b==2&b==3){
    //优先使用valueOf,没有再查找toString
    console.log('数组')
}
var i=0
Object.defineProperty(window,'a',{
    get(){
        return ++i
    }
})
if(a=='1'&a==2&a==3){
    //优先使用valueOf,没有再查找toString
    console.log('默认类型转换')
}