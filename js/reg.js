//千分位
let str='12345678' //12,345,678
str=str.split('').reverse().join('')
str=str.replace(/(\d{3}(?!$))/g,'$1,')
str=str.split('').reverse().join('')
console.log(str)