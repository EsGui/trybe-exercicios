/* 
5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro

    Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

    Um ângulo será considerado inválido se não tiver um valor positivo.
*/

const a1 = 20;
const a2 = -30;
const a3 = 40;

if (a1 < 0 || a2 < 0 || a3 < 0) {
    console.log("Um dos valores é negativo. Portanto é um valor inválido");
}

let soma = a1 + a2 + a3

if (soma === 180) {
    console.log(true);
} else if (soma != 180) {
    console.log(false);
}