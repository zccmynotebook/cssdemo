const fs=require('fs')
const {resolve}=require('path')
const https = require('https');
const http = require('http');

const name=process.argv[2]
const dist=resolve(__dirname,'../../../Music')
const murl='https://music.163.com/song/media/outer/url'
if (!name){
    console.error('文件名称')
    throw new Error('文件名称')
}
 
fs.readFile(name,(err,data)=>{
  if(!err){
    JSON.parse(data).forEach(async v=>{
        await getRealUrl(murl+v.src.substring(5),v.name)          
    })
  }
})
 function getRealUrl(url,name){
    https.get(url,async function(res){
        if(res.headers.location){
            await download(res.headers.location,name)
            return
        }
    })
} 
async function download(url,name){
    await http.get(url,function(req){
        let data=''
        req.on('data',(chunk)=>{
            data+=chunk 
        })
        req.on('end',()=>{
            fs.writeFile(resolve(dist,name+'.mp3'),data,(err)=>{
                if(!err){ 
                    console.log(name+'保存成功')
                }
            })
        })
    })
} 