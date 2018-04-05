window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key ="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0; //rewinds wav to beginning
    audio.play();
    key.classList.add('playing')
 });
 const keys = document.querySelectorAll('.key');
 function removeTransition(e){
     if(e.propertyName !== 'transform') return; //skip if not a transform
     this.classList.remove('playing')
     console.log(e)
 }
 keys.forEach(key => key.addEventListener('transitionend', removeTransition));
