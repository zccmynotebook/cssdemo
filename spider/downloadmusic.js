const fs=require('fs')
const {resolve}=require('path')
const https = require('https');
const http = require('http');

const name=process.argv[2]
const dist=resolve(__dirname,'../../../Music/')
const murl='https://music.163.com/song/media/outer/url'
if (!name){
    console.error('文件名称')
    throw new Error('文件名称')
}
 
fs.readFile(name,(err,data)=>{
  if(!err){
    JSON.parse(data).forEach( v=>{
        getRealUrl(murl+v.src.substring(5),v.name)     
    })
  }
})
 function getRealUrl(url,name){
    https.get(url, function(res){
        if(res.headers.location){
            setTimeout(async()=>{
                await download(res.headers.location,name)
            },10000)
            return
        }
    })
} 
async function download(url,name){
    let ws=fs.createWriteStream(resolve(dist,name+'.mp3'))
    await http.get(url,function(req){
        req.on('data',(chunk)=>{
            ws.write(chunk)
        })
        req.on('end',()=>{
            ws.close()
        })
    })
} 