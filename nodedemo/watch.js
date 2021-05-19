let fs=require('fs')

fs.watchFile('hello.txt',(current,old)=>{
    console.log('change...',current,old)
})