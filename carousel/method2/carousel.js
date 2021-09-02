$(function(){
    const w=280;
    let i=0, all=$('li'),len=all.length
    let timer ,ul=$('ul')
    ul.append('<li><img src="../img/1.webp"/></li>')
    move()
    
    $('.wrap').mouseover(function(){
        clearInterval(timer)
    })
    $('.wrap').mouseout(function(){
        move()
    })

    function move(){
        timer = setInterval(()=>{
            if(i<=len){
                ul.css('left',-w*(i++))
            } else {
                ul.css('left',0)
                i=1            
            }
        },1000)
    }
})
 