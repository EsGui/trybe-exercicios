/* 
2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

*/


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordena = () => {
    for (let index1 = 0; index1 < oddsAndEvens.length; index1 += 1) {
        for (let index2 = 0; index2 < oddsAndEvens.length; index2 += 1) {
            if (oddsAndEvens[index1] < oddsAndEvens[index2]) {
                let guardaValor = oddsAndEvens[index2];
                oddsAndEvens[index2] = oddsAndEvens[index1];
                oddsAndEvens[index1] = guardaValor;
            }
        }
    }
    return oddsAndEvens
}

console.log(ordena(`${oddsAndEvens}`)) // será necessário alterar essa linha ;)


// 

