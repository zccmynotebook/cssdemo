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