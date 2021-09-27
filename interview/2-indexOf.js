//自己实现indexOf
function ownIndex(pstr,cstr){
    let plen=pstr.length,clen=cstr.length
    let pos=-1
    if(clen>plen) return pos
    for(let i=0;i<=plen-clen;i++){
        let c=pstr.substr(i,clen)
        if(c===cstr){
            pos=i
            break
        }
    }    
    return pos
}
function ownIndex1(pstr,cstr){
    let plen=pstr.length,clen=cstr.length
    let pos=-1
    if(clen>plen) return pos
    let r=pstr.match(cstr)
    r!=null&&(pos=r.index)
    return pos
}

let i=ownIndex('woshizhongguoren','ren')
let i1=ownIndex1('woshizhongguoren','ren')
console.log(i,i1)