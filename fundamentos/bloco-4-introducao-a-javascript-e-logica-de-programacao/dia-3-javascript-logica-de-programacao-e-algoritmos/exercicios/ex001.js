/*

1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

    O fatorial é representado pelo sinal !
    ! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

*/

let num = 4;
let fatorial = 1;

for (let index = 1; index < num + 1; index += 1) {
    fatorial *= index
}

console.log(fatorial);


