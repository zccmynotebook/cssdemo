//手写promise
function MyPromise(executor){
   //promise实例有PromiseState和PromiseResult属性
    this.PromiseState = 'pending' //pending,fulfilled,rejected
    this.PromiseResult = null
    
    //异步
    this.callbacks = []
    let self = this
    function resolve(data){
        if (self.PromiseState !=='pending') return
        self.PromiseState = 'fulfilled'
        self.PromiseResult = data
        //异步情况
        setTimeout(()=>{
            self.callbacks.forEach(v=>{
                v.onResolve(data)
            })
        })
    }

    function reject(data){
        if (self.PromiseState !=='pending') return
        self.PromiseState = 'rejected'
        self.PromiseResult = data
        //异步情况
        setTimeout(()=>{
            self.callbacks.forEach(v=>{
                v.onReject(data)
            })
        })
    }

    //防止代码直接抛出异常
    try{
        executor(resolve,reject)
    }catch(e){
        reject(e)
    }
}

MyPromise.prototype.then=function(onResolve,onReject){
    let self=this
     //catch异常穿透原理
     //then中没有fail处理
    if(typeof onReject !=='function'){
        onReject = reason=>{
           throw reason 
        }
    }

    if(typeof onResolve !=='function'){
        onResolve = ()=>{}
    }

    return new MyPromise((resolve,reject)=>{
        if(this.PromiseState === 'fulfilled'){
            setTimeout(()=>{
                thenCallback(onResolve)
            })
        }else if(this.PromiseState === 'rejected'){
            setTimeout(()=>{
                thenCallback(onReject)
            })
        }else {
            //外部不能修改状态的情况下只能是pending
            //此时是因为异步情况，执行then()，状态一直没有改变,先保存回调
            this.callbacks.push({
                onResolve:()=>{
                    thenCallback(onResolve)
                },
                onReject:()=>{
                    thenCallback(onReject)
                }
            })
        }

        function thenCallback(fn){
            try{
                //then的回调执行结果，决定状态
                let result = fn(self.PromiseResult)
                //返回MyPromise实例
                if (result instanceof MyPromise){
                    result.then(success=>{
                        resolve(success)
                    },fail=>{
                        reject(fail)
                    })
                } else {
                    //返回普通类型,直接改变状态
                    resolve(result)
                }
           }catch(e){
               //then的回调直接抛异常
               reject(e)
           }
        }
     
    })
}

MyPromise.prototype.catch=function(onReject){
    this.then(null,onReject)
}

MyPromise.resolve=(result)=>{
    return new MyPromise(resolve=>{
        //返回MyPromise实例
        if (result instanceof MyPromise){
            result.then(success=>{
                resolve(success)
            },fail=>{
                reject(fail)
            })
        } else {
            //返回普通类型,直接改变状态
            resolve(result)
        }
        
    })
} 
MyPromise.reject=(result)=>{
    return new MyPromise((resolve,reject)=>{
        //返回MyPromise实例
        if (result instanceof MyPromise){
            result.then(success=>{
                resolve(success)
            },fail=>{
                reject(fail)
            })
        } else {
            //返回普通类型,直接改变状态
            reject(result)
        }
        
    })
} 

MyPromise.all=(list)=>{
    let n = 0
    let arr = []
    return new MyPromise((resolve,reject)=>{
        list.forEach((item,i)=>{
            item.then(v=>{
                console.log(v,item)
                n++
                arr[i] = v
                if(n === list.length){
                   resolve(arr)
                }
            },j=>{
                reject(j)
            })
        })
        
    })
} 

MyPromise.race=(list)=>{
    return new MyPromise((resolve,reject)=>{
        list.forEach(item=>{
            item.then(v=>{
                resolve(arr)
            },j=>{
                reject(j)
            })
        })    
    })
} 
