var b=1;
//匿名函数名称只能在函数内使用，且名称不允许修改
(function b(){
    //'use strict'
    b=2
    console.log(b)
})();
// (function b(){
//     'use strict'
//     let b=2
//     console.log(b)
// })();
console.log(b)