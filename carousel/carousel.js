$(function(){
    const w=280;
    let i=0, all=$('li'),len=all.length
    // let list=$('li').each(function( index,item ) {
    
    //   });
        setInterval(()=>{
            if(i<len){
                all.removeClass('fadeIn').addClass('fadeOut')
                $(all[i++]).addClass('fadeIn').removeClass('fadeOut')
            } else {
                i=0
            }
        },3000) 
    console.log(len)
})