let fs=require('fs')
// fs.writeFile('a.txt','fgh',(err)=>{
//     if(!err){
//         console.log('ok')
//     }
// })
 
// fs.unlink('a.txt',(err)=>{
//     if(!err){
//         console.log('ok')
//     }
// })
//v14新增
// fs.rm('a.txt',(err)=>{
//     if(!err){
//         console.log('ok')
//     }
// })
fs.readdir('..',(err,list)=>{
    if(!err){
        list.forEach(v=>{
            fs.stat('../'+v,(err,stat)=>{
                if(!err){
                    if (stat.isFile(v)){
                        console.log(v,stat.size)
                    } else {
                        console.log(v,'是目录')
                    }                   
                }
            })
        })
    }
})