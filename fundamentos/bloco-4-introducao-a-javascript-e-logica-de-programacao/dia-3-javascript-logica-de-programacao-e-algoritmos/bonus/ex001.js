/*

Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

    n = 5

    *****
    *****
    *****
    *****
    *****

Referência: trybe

*/

let n = 5;
let symbol = "*";
let inputLine = "";

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    inputLine += symbol
}

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    console.log(inputLine);
}

