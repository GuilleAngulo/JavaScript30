const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.round(Math.random() * holes.length);
    const hole = holes[idx];
    //Si el agujero actual es el mismo que el ultimo, se vuelve a llamar la funcion hasta que salga uno diferente
    if(hole === lastHole) {
        return randomHole(holes);
    }
    
    //Guardar el ultimo agujero que ha salido
    lastHole = hole;
    return hole;
}

//Accion del Topo
function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    //Se le añade al agujer la clase "up"
    hole.classList.add("up");
    setTimeout(() => {
        hole.classList.remove("up");
        if(!timeUp) peep();
    }, time);
}

function startGame() {
    //Resetear el valor de score para iniciar a 0
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    peep();
    setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
    if(!e.isTrusted) return; //La propiedad del evento hace referencia a si ha sido el usuario quien ha hecho click sin trampas
    score++;
    //Al hacer click, el topo se esconde inmediatamente
    this.classList.remove("up");
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener("click", bonk));