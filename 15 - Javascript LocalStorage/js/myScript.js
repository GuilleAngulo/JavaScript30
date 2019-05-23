const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) ||  [];

function addItem(e) {
    //Prevenir que al enviar el formulario se refresque la pagina, como hace por defecto
    e.preventDefault();
    const text = (this.querySelector("[name=item]")).value;
    const item = {
        text: text,
        done: false
    }
    //Guardar en el array el nuevo elemento
    items.push(item);
    
    populateList(items, itemsList);
    
    localStorage.setItem("items", JSON.stringify(items));
    
    //Refresca el input del formulario, dejando el campo vacio una vez se envie
    this.reset();
    
}

function populateList(plates = [], plateList) {
    plateList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="items${i}"
            ${plate.done ? 'checked' : ''} />
            <label for="items${i}">${plate.text}</label>
        </li>
        `;
    }).join("");
}

function toogleDone(e) {
    
    //Como hay listeners en dos elementos, solo queremos coger el que sea "input"
    if(!e.target.matches("input")) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toogleDone);


populateList(items, itemsList);