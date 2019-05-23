const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
    .map(node => node.dataset.time) //El array con elementos de lista pasa a ser un array con el "data-time"
    .map(timeNode => {
        const [mins, secs] = timeNode.split(":").map(parseFloat); //Meter en las variables el valor float de las partes antes y despues de ":"
        return (mins * 60) + secs; //El array ahora contiene la suma total de la hora en segundos
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds; //En variable let porque se va a reasignar varias veces

const hours = Math.floor(secondsLeft / 3600); //Devuelve el maximo numero entero de la division de segundos entre segundos en una hora
secondsLeft = secondsLeft % 3600; //El valor de los segundos restantes pasara a tener el resto de la anterior division

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, minutes, secondsLeft);