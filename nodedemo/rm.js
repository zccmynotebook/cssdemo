let fs=require('fs')
const name='a.txt'
fs.writeFileSync(name,'hhh')
setTimeout(()=>{
    fs.unlink(name,(err)=>{
        if(!err){
         console.log('删除成功')
        }
     })
},1000)