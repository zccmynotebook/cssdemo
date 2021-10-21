class A{
    from='中国';
    get city(){
        return '北京'
    }
    set city(val){
        console.log(this)
    }

}
console.log(new A)