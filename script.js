Original = [2,3,4,5,6];
arr1 = [234, 562, 356];
arr2 = [456, 789, 334];

//Clonar arrays
const copia = [... Original];

//clonar objetos
const clon = {... Original};

//combinar arrays 
const combinado = {... arr1, ...arr2};

console.log (copia);
console.log(clon);
console.log(combinado);
