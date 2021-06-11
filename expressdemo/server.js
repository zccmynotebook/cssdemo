const dns = require('dns');
const express = require('express')
const app = express();

app.get('/lookup',(req,res)=>{
    console.log(req.query)
    dns.lookup(req.query.q, (err, address, family) =>{
        console.log('地址: %j 地址族: IPv%s', address, family);
        res.send(`地址: ${address} 地址族: ${family}`)
    })
})

app.listen(3000)
