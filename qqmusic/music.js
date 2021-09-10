window.onload=function(){
    const audio=new Audio()
    audio.src='love.mp3'
    audio.onload=event => {
        console.log(3)
         
    };
    audio.addEventListener("canplay", event => {
        console.log(1,audio.readyState)
        /* 音频可以播放；如果权限允许则播放 */
        audio.play();
    });
    audio.addEventListener("canplaythrough", event => {
        console.log(2,audio.readyState)
                audio.play();
    });
    
}