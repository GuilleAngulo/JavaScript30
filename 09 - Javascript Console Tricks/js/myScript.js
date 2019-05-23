const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const shit = "💩";

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello I am a %s string!", "💩");
console.log(`Hello I am a ${shit} string!`);
    
// Styled
console.log("%c I am a great text", "font-size:20px");
//Colocando '%c' delante del texto, se puede añadir estilo a traves del segundo parametro
    
// warning!
console.warn("OH NOOOO");

// Error :|
console.error("Shit!");

// Info
console.info("Information");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");
//ASSERT evalua una condicion, y si esta es falsa emite un error con el segundo parametro de texto

// clearing
//console.clear();
//Limpia la consola
    
// Viewing DOM Elements
console.log(p); //Muestra el elemento DOM
console.dir(p); //Muestra el arbol de propiedades del elemento DOM

// Grouping together
dogs.forEach(dog => {
    // console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age} dog years old`);
    console.groupEnd(`${dog.name}`);
})


// counting
console.count("Wes");
console.count("Jimmy");
console.count("Jimmy");
console.count("Jimmy");
console.count("Wes");
console.count("Jimmy");


// timing
console.time("Fetching data");
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd("Fetching data");
        console.log(data);
});

//Table
console.table(dogs);


