const path = require('path');
const url=require('url')
console.log(process.env.PATH);

let list=process.env.PATH.split(path.delimiter);
console.log(list)

let str="http://nodejs.cn/api/path.html?city=bj&name=test#path_path_resolve_paths"
console.log(url.parse(str))

let host="http://nodejs.cn/api"
let pth="../a/b/c.html"
console.log(url.resolve(host,pth))