const a=['A1','A2','B1','B2','C1','C2','D1','D2'];
let b=['A','B','C','D']
//返回合并结果['A1','A2','A','B1','B2','B','C1','C2','C','D1','D2','D']
b=b.map(v=>v+'3')
let c = a.concat(b).sort((a1,a2)=>a1.localeCompare(a2))
// c=c.map(v=>{
//     if(v.endsWith('3')){
//         return v.slice(0,1)
//     }
//     return v
// })
c=c.map(v=>v.replace('3',''))
console.log(c)