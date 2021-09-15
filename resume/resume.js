
window.onload=function(){
    let main=document.querySelector('main')
    let aside=document.querySelector('aside')
    let n=0;
    function loading(){
      n+=50 
      if(n>100){
        clearInterval(timer)
        main.classList.remove('hide')
        aside.classList.add('hide')
      } else {
        process.style.width=n+'%'
      }
    }
    let timer=setInterval(loading, 500);


    var mySwiper = new Swiper ('.swiper-container', {
      //direction: 'vertical',
      loop: true,
    })       
}