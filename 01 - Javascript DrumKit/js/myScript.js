function playSound(e) {
    var audio = document.getElementById("k" + e.keyCode);
    var key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(audio != null) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
    else return;
}

function removeTransition(e) {
    
    console.log(e);
     this.classList.remove('playing');
    
    /*if (e.propertyName == 'transform') {
        this.classList.remove('playing');
    } else return;*/
}

const keys = document.getElementsByClassName("key");
var i;
for (i = 0; i < keys.length; i++) {
    keys[i].addEventListener('transitionend', removeTransition);
}


//keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);