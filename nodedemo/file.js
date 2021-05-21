let fs=require('fs')
// fs.writeFile('hello.txt','learning ',{flag:'r+'},(err)=>{
//     if(!err) console.log('cg')
//     if(err) console.log(err)

// })
let r=fs.createReadStream('hello.txt')
let w=fs.createWriteStream('writestream.txt')

r.once('open',()=>{
    console.log('打开读文件')
})
r.once('close',()=>{
    console.log('关闭读文件')
    w.end()
})
w.once('open',()=>{
    console.log('打开写文件')
})
w.once('close',()=>{
    console.log('关闭写文件')
})
// r.on('data',(data)=>{
//     w.write(data)
// })
//替换上面的内容，直接写
r.pipe(w)
 
