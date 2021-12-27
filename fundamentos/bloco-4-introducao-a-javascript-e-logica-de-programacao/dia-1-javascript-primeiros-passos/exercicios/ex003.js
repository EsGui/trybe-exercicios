/* 
Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
*/

const a = 5
const b = 2
const c = 9

if (a > b && a > c) {
    console.log("O valor " + a + " é o maior valor")
} else if (b > a && b > c) {
    console.log("O valor " + b + " é o maior valor")
} else {
    console.log("O valor " + c + " é o maior valor")
}