/*

6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let contador = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        contador += 1
    }
}

if (contador === 0) {
    console.log("Nenhum valor ímpar encontrado")
} else {
    console.log("Foram encontrados " + contador + " valores(valor) pares(par)")
}
