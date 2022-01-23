/* 

2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
Dica: use parâmetro rest .

*/


const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum(4, 7, 8, 9, 60))