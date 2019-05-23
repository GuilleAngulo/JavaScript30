const nav = document.getElementById("main");
const topOfNav = nav.offsetTop;


function fixNav() {
    if(window.scrollY >= topOfNav) {
        //Para que no haya un pequeño salto cuando salte, se añade un padding del tamaño del elemento
        document.body.classList.paddingTop = nav.offsetHeight + `px`;
        //La nueva clase se añade al body porque afecta a mas de un elemento
        document.body.classList.add("fixed-nav");
    } else {
        //Se deshacen los cambios realizados por el scroll
        document.body.classList.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
    }
}


window.addEventListener("scroll", fixNav);