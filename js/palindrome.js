function reverseStr(str){
    let list=str.split('').reverse()
    return list.join('')
}
function palindrome(str){
    return str === reverseStr(str)
}

console.log(palindrome('lol'))