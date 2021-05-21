const http=require('http')
const https=require('https')
const cheerio=require('cheerio')
const fs=require('fs')
let data=[]
const server=http.createServer((req,res)=>{
    https.get('https://music.163.com/artist?id=861777',(resp)=>{
        resp.on('data',(chunk)=>{
            data.push(chunk)
        })
        resp.on('end',()=>{
            dealData(data.join())
        })
    })
    res.end('ok')
})

server.listen(8090,()=>{
    //console.log('success')
})
let list=[]
function dealData(stream){
    const $=cheerio.load(stream)
    $('ul.f-hide a').each((i,item)=>{
        list.push({src: $(item).attr('href'), name: $(item).text()})
    })
    save(JSON.stringify(list))
}
function save(data){
    fs.writeFile('华晨宇歌单.txt',data,(err)=>{
        if(!err) console.log('保存成功')
    })
}