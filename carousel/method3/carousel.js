$(function(){
    let li1=$($('ul li')).clone()
    let ul=document.querySelector('ul')
    $('ul').append(li1)
    let list=$('li')
    
    let uw=$('ul').width(list.length*list.width()).width()
     
    setInterval(function(){
        if(Math.abs(ul.offsetLeft)>=uw/2){
            ul.style.left=0
        }
        ul.style.left =ul.offsetLeft-10      
    },100)
})
 