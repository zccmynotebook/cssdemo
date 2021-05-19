class P{
    //一个确定一个构造器对象识别的对象是否为它的实例的方法。被 instanceof 使用
    static [Symbol.hasInstance](){
        console.log('一个确定一个构造器对象识别的对象是否为它的实例的方法。被 instanceof 使用')
    }
}

console.log({} instanceof P)

//Symbol.iterator:一个返回一个对象默认迭代器的方法。被 for...of 使用。

