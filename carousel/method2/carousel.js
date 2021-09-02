$(function(){
    const w=280;
    let i=0, all=$('li'),len=all.length
    let timer ,ul=$('ul')
    move()
    
    $('.wrap').mouseover(function(){
        clearInterval(timer)
    })
    $('.wrap').mouseout(function(){
        move()
    })

    function move(){
        timer = setInterval(()=>{
            if(i<len){
                ul.css('left',-w*(i++))
            } else {
                i=0
                //ul.css('left',0)
            }
        },1000)
    }
})
 