 // 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highLightLink() {
    //El métodogetBoundingClientRect() devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización
    const linkCoords = this.getBoundingClientRect();
    
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        //Hay que sumar la parte del scroll ya que los valores son relativos a la ventana de visualizacion
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }
    
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach( a => a.addEventListener("mouseenter", highLightLink));