window.onload=function(){
    // const audio=new Audio()
    // audio.src='love.mp3'
    // audio.onload=event => {
    //     console.log(3)
         
    // };
    const pheight=document.querySelector('p').clientHeight
    const all=document.querySelectorAll('p').length;
    const section= document.querySelector('section')
    let i=1;
    let timer=setInterval(()=>{
        if(i>=all) clearInterval(timer);
        i++;
        section.style.transform=`translateY(-${pheight*i}px)`
    },1000)
    
}