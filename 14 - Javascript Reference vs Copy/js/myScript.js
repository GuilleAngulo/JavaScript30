// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "guillermo";
let name2 = name;
console.log(name, name2);
name = "willy";
console.log(name, name2);

//EN STRINGS, NUMEROS y BOOLEANOS EL VALOR ACTUALIZADO NO AFECTA A LA COPIA

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.
const team = players;
// You might think we can just do something like this:
team[3] = "Luke";
//SI SE ACTUALIZA LA COPIA DE UN ARRAY, AL ESTAR POR REFERENCIA SE MODIFICA EL ORIGINAL TAMBIEN

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!

const team2 = players.slice();
team2[2] = "Steve";


// one way
// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[2] = "Jonah";

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = "George";
const team5 = Array.from(players);
team5[3] = "Jim";
// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};
// and think we make a copy:
const captain = person;
person.number = 99;
// how do we take a copy instead?
const capt2 = Object.assign({}, person, { number: 2, age: 10 });
console.log(capt2);
// We will hopefully soon see the object ...spread
//const capt3 = {...person};
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
  

console.clear();

const guillermo = {
      name: 'Guillermo',
      age: 100,
      social: {
        twitter: '@angulio',
        instagram: 'angulo.guillermo'
      }
};

//ESTO SI CAMBIARA EL OBJETO ORIGINAL, YA QUE LA COPIA SOLO FUNCIONA PARA UN NIVEL DE PROFUNDIDAD. LO QUE ESTA DENTRO DE SOCIAL ESTA POR REFERENCIA
const copia = Object.assign({}, guillermo);
copia.social.instagram = 'willy';

console.log(guillermo, copia);

//LA MANERA DE HACER UNA COPIA PROFUNDA ES MEDIANTE JSON-STRINGIFY y JSON-PARSE
const copia2 = JSON.parse(JSON.stringify(guillermo));
copia2.social.instagram = "will";
console.log(guillermo, copia, copia2);


