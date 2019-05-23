//Represents a speech request. It contains the content the speech service should read and information about how to read it 
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector("[name='text']").value;

function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        // Filtro para que aparezcan solo voces en ingles
        //.filter(voice => voice.lang.includes("en"))
        .map( voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join("");
        
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toogle();
}


//Reinicia la locucion, se cancela y se vuelve a reproducir
//Argumento por defecto verdadera, en caso de que se quiera pasar falso para que no reinicie la locucion
function toogle(startOver = true) {
    speechSynthesis.cancel();
    if(startOver) {
     speechSynthesis.speak(msg);   
    }
}

function setOption() {
    msg[this.name] = this.value;
    toogle();
}

//The SpeechSynthesis interface of the Web Speech API is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides.
speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach(option => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toogle);
//No se puede añadir directamente una funcion con parametro en EventListener, hay que hacerlo a traves de una funcion
stopButton.addEventListener("click", () => toogle(false));
