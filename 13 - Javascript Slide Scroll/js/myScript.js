function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
}


const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
    
    
    sliderImages.forEach(sliderImage => {
        //Mitad de la imagen (Linea de pixel posicionado en el momento) - La mitad de la altura de la imagen
        const slideInAt = (window.scrollY + window.innerHeight) -
              sliderImage.height / 2;
        console.log("slideInAt: " + slideInAt);
        //Parte de abajo de la imagen = Distancia de la imagen hasta el lado superior de la ventana + la altura de la imagen
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        console.log("imageBottom: " + imageBottom);
        //Variable que comprueba si se esta mostrando la mitad de la imagen o mas
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        //Variable que comprueba si no se ha pasado la imagen
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add("active");
        } else {
            sliderImage.classList.remove("active");
        }
        
    })   
}

window.addEventListener("scroll", debounce(checkSlide));