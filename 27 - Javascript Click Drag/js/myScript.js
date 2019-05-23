const slider = document.querySelector(".items");
//Variable para controlar si se esta pulsando el ratón
let isDown = false;
//Variable para controlar en que coordenada X se hizo el primer click
let startX;
let scrollLeft;

//Cuando se pulse el ratón
slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    //La posicion X dentro del elemento, por eso se resta la distancia del elemento a la parte izquierda de la ventana
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return; //Parar la función en caso no se este pulsando el raton
    //Detiene cualquier la accion por defecto que tiene el elemento. Si tuviese texto, para que no se seleccione
    e.preventDefault();
    //Recalcular en cada movimiento de raton la nueva posicion X
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //El recorrido desde la X inicial hasta la posicion actual duplicado para que sea "vea" el doble
    slider.scrollLeft = scrollLeft - walk;
});