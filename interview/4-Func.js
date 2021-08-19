//Function不会产生闭包；
var a=1,b=2;
function test(){
    var b=3
    return new Function('c','console.log(a+b+c)')
}
test()(0)