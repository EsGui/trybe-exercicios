/* 

2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.


*/

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
let array = []

console.log(comida, animal, bebida); // arroz gato água

array.push(bebida, comida, animal);

[comida, animal, bebida] = array

console.log(comida, animal, bebida);

