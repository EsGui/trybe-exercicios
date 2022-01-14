/* 

Crie uma função que receba um número e retorne seu fatorial.

    Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

*/

const fatorial = (numero) => {
    let arrayNumeros = [];
    let fatorial = 1
    for (let index = numero; index >= 1; index -= 1) {
        arrayNumeros.push(index);
        fatorial *= index;
    }
    return `${numero}! = ${arrayNumeros.join(' * ')} = ${fatorial}` 
}

console.log(fatorial(4))
