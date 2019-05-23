const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");


function handleMove(e) {
    //Se resta la parte que hay entre la parte de arriba y el elemento, para hacer la posicion relativa dentro del elemento
    //Y asi, si hay algun nuevo elemento entre la zona superior y el elemento, no interfiere
    const y = e.pageY - this.offsetTop;
    //El porcentaje es la posicion entre el tamaño total del elemento
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    bar.style.height = height;
    const playbackRate = percent * (max - min) + min;
    bar.textContent = playbackRate.toFixed(2) + "x";
    video.playbackRate = playbackRate;
    
}

speed.addEventListener("mousemove", handleMove);