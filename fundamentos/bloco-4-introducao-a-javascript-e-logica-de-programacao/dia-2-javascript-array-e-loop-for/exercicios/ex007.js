/* 
7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[menor] > numbers[index]) {
        numbers[menor] = numbers[index]
    }
}

console.log(numbers[menor]);
