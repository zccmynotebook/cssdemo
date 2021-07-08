const portList = [];
onconnect = function(e) {
    let port = e.ports[0];  
    portList.push(port); 
    console.log(port)    
    port.onmessage = function(e) {
        var workerResult = e.data;
        portList.map(item=>{            
            // item!=port&&item.postMessage(workerResult);  /**不发给自己 */
            item.postMessage(workerResult);                 /**发给自己 */
        });        
    }
}