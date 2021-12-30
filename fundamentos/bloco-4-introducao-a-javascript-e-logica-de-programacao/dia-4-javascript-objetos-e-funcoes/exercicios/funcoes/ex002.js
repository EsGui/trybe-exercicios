/* 

2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

    Array de teste: [2, 3, 6, 7, 10, 1]; .
    Valor esperado no retorno da função: 4 .

*/



function maiorValorDoArray(array) {
    /* let array = [2, 3, 6, 7, 10, 1]; */
    let array2 = [];
    let prosseguir = 0
    
    for (let num in array) {
        array2.push(array[num])
        
    }
    
    for (let index = 0; index < array2.length; index += 1) {
        if (array2[prosseguir] < array2[index]) {
            array2[prosseguir] = array2[index]
        }
    }
    
    for (let index = 0; index < array2.length; index += 1) {
        if (array2[0] == array[index]) {
            console.log(array.indexOf(array[index]));
        }
    }
}

maiorValorDoArray([2, 3, 6, 7, 10, 1]);