const fs = require('fs-extra')
const path=require('path')
 
const {resolve}=path
const DIR=resolve('.','files')
const filePath=resolve(DIR,'a')
console.log(filePath)



const pipeStream=(path,writestream)=>new Promise(resolve=>{
    const r=fs.createReadStream(path)
    r.pipe(writestream)
    r.on('end',()=>{
        fs.unlinkSync(path)
        resolve()
    })
})

const mergeChunkFile=async(filepath,filename,size)=>{
    const chunkDir=resolve(DIR,filename)
    console.log(111,filename,filepath)
    const chunkPaths=await fs.readdir(chunkDir)
    chunkPaths.sort((a,b)=>a.split('-')[1]-b.split('-')[1])
    await Promise.all(
        chunkPaths.map((cpath,index)=>{
            pipeStream(resolve(chunkDir,cpath), fs.createWriteStream(filepath,{
                start:index*size,
                end:(index+1)*size
            }))
        })
    )
}


mergeChunkFile('kenan','kenan',1024*1024)

