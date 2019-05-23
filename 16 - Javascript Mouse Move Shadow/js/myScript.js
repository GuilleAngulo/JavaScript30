const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; //100px


function shadow(e) {
    //ES LO MISMO
    //const height = hero.offsetHeight;
    //const width = hero.offsetWidth;
    //QUE ESTO
    const { offsetHeight: height, offsetWidth: width } = hero;
	
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
    
    //Guardamos en variables que van a cambiar las coordenadas del raton. SI TIENE UN ELEMENTO ANIDADO HAY QUE AÑADIR MAS COSAS, COMO A CONTINUACION
    let { offsetX: x, offsetY: y } = e;
    
    //Al pasar el raton por encima del elemento hijo H1, los valores x e y varian tratandolo como un nuevo elemento
    //Si pasa el raton por encima del hijo, o lo que es lo mismo ->
    //Si this (hero) no es igual a target del evento
    if (this !== e.target) {
        //Las nuevas coordenadas serán la suma de la "nueva posicion "x" e "y" (dentro del h1) + la posicion del h1 respecto a la izquierda y zona superior 
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;

}

hero.addEventListener("mousemove", shadow);