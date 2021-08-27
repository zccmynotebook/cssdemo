const fs = require('fs-extra')
const path=require('path')
const http=require('http')
const multiparty=require('multiparty')
var form = new multiparty.Form();
 

const server=http.createServer()

server.on('request',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    if(req.url=='/files'){      
        form.parse(req, function(err, fields, files) {
            if (err) return;
            console.log(arguments)
            // Object.keys(fields).forEach(function(name) {
            //   console.log('got field named ' + name);
            // });
           
            // Object.keys(files).forEach(function(name) {
            //   console.log('got file named ' + name);
            // });
           
            // console.log('Upload completed!');
            // res.setHeader('text/plain');
            // res.end('Received ' + files.length + ' files');
        });
    }
})
server.listen(3000,()=>{
    console.log('start')
}) 

