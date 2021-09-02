$(function(){
    const w=280;
    
    let i=0, all=$('li'),len=all.length
    let timer ;
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
                all.removeClass('fadeIn').addClass('fadeOut')
                $(all[i++]).addClass('fadeIn').removeClass('fadeOut')
            } else {
                i=0
            }
        },2000)
    }
})
 