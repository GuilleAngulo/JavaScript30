const inbox = document.querySelectorAll('.inbox input[type="checkbox"]');


let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    //Comprobar si la tecla shift esta presionada
    //Y si el propio elemento esta "activado"
    if (e.shiftKey && this.checked) {
        inbox.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("Starting to check in between.. ");
            }
            
            if(inBetween) {
                checkbox.checked = true;
            }
        })
    }
    
    lastChecked = this;
}

inbox.forEach(checkbox => {
    checkbox.addEventListener("click", handleCheck);  
})