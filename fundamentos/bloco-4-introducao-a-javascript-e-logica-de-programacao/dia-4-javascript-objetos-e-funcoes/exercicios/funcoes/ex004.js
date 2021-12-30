/* 

4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

    Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

    Valor esperado no retorno da função: Fernanda.


*/


function maiorPalavra(array) { 
    let array2 = [];
    let prosseguir = 0
    
    for (let palavra in array) {
        array2.push(array[palavra].length)   
    }
    
    for (let index = 0; index < array2.length; index += 1) {
        if (array2[prosseguir] < array2[index]) {
            array2[prosseguir] = array2[index];
        }
    }
    
    for (let index = 0; index < array.length; index += 1) {
        if (array[index].length === array2[0]) {
            console.log(array[index]);
        }
    }
}


maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
