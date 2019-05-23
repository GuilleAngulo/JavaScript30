const divs = document.querySelectorAll("div");

function logText(e) {
    //Al estar los 3 elementos anidados, ejecuta el evento en "burbuja" hacia arriba
    console.log(this.classList.value);
    //El efecto burbuja del evento en los elementos superiores
    e.stopPropagation();
}

divs.forEach(div => div.addEventListener("click", logText));

//addEventListener tiene un tercer argumento de opciones

divs.forEach(div => div.addEventListener("click", logText, {
    capture: false //Invierte el orden de efecto burbuja del evento si se pone a true: 1)div1 2)div2 3)div3
    once: true //Si se pone a true, solo escucha una vez el evento. Lo mismo que una vez hecho una vez, ejecutara removeEventListener
}));