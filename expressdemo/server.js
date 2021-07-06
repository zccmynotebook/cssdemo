const dns = require('dns');
const express = require('express')
const app = express();

//use主要用于加载中间件，
app.use('/a', function (req, res, next) {
    console.log(1,arguments);
    next(); // pass control to the next handler
});
//all()是所有方法的集合，用在最前面，类似java中的过滤器
app.all('/a', function (req, res, next) {
    console.log(2,arguments);
    next(); // pass control to the next handler
});

app.get('/a',(req,res)=>{
    console.log(3,arguments);
    res.send(`地址: ${req.url}`)
})


app.get('/lookup',(req,res)=>{
    console.log(req.query)
    dns.lookup(req.query.q, (err, address, family) =>{
        console.log('地址: %j 地址族: IPv%s', address, family);
        res.send(`地址: ${address} 地址族: ${family}`)
    })
})

app.get('/ab?c',(req,res)=>{
    res.send(`地址: ${req.url}`)
})

app.listen(3000,'localhost')
