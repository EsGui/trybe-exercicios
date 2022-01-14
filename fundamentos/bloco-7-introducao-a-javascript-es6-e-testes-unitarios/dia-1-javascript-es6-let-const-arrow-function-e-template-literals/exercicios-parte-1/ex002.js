/* 
2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

*/


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordena = (array) => {
    for (let index1 = 0; index1 < array.length; index1 += 1) {
        for (let index2 = 0; index2 < array.length; index2 += 1) {
            if (array[index1] < array[index2]) {
                let guardaValor = array[index2];
                array[index2] = array[index1];
                array[index1] = guardaValor;
            }
        }
    }
    return array
}

const guarda = ordena(oddsAndEvens); // será necessário alterar essa linha ;)
console.log(`Os números ${guarda} se encontram ordenados de forma crescente!`)

// 

