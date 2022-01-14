/* 

Crie uma função que receba uma frase e retorne qual a maior palavra.

Exemplo:

      longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

*/

/* const maiorPalavra = (maior) => {
    maior.split("")
    for (let index = 0; index < maior.length; index += 1) {
        if (maior[0].length < maior[index].length) {
            maior[0].length = maior[index].length;
        }
    }
    return maior[0]
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu' */

const maior = 'Antônio foi no banheiro e não sabemos o que aconteceu' // retorna 'aconteceu'
let pegaArray = maior.split(" ");
for (let index = 0; index < pegaArray.length; index += 1) {
    if (pegaArray[0].length < pegaArray[index].length) {
        pegaArray[0] = pegaArray[index];
    } else if (pegaArray[0].length > pegaArray[index].length){
        pegaArray[index] = pegaArray[0]
    }
}
console.log(pegaArray[0])
