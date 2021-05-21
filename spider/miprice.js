const http=require('http')
const https=require('https')
const cheerio=require('cheerio')
let data=[]
const server=http.createServer((req,res)=>{
    https.get('https://www.mi.com/',(resp)=>{
        resp.on('data',(chunk)=>{
            data.push(chunk)
        })
        resp.on('end',()=>{
            res.setHeader('Content-Type','text/html;charset=utf-8')
            dealData(data.join(),res)
        })
    })
})

server.listen(8090,()=>{
    //console.log('success')
})

function dealData(stream,res){
    const $=cheerio.load(stream)
    res.write('<ul>')
    $('li.nav-item .children-list li').each((i,item)=>{
        let name=$(item).find('.title').text(),
        price=$(item).find('.price').text()
        res.write(`<li>${name}---${price}</li>`)
        //console.log(name,'---',price)
    })
    res.end('</ul>')
    
}