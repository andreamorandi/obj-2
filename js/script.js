// 2. A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const firstArray = ["pippo", "PLUTO", "Paperino"];
const secondArray = firstArray.map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
console.log(firstArray);
console.log(secondArray);