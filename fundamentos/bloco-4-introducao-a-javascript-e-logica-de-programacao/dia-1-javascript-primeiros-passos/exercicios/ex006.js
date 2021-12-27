/* 
6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

    - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
    - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
    - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
    - Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let peca = "bispo".toLowerCase();

switch (peca) {
    case "bispo":
        console.log("bispo -> diagonais");
        break;
    case "torre":
        console.log("torre -> linha reta");
        break;
    case "cavalo":
        console.log("cavalo -> horizontalmente ou verticalmente");
        break;
    case "rainha":
        console.log("rainha -> linha reta, horizontalmente, verticalmente ou diagonalmente");
        break;
    case "rei":
        console.log("rei -> qualquer casa");
        break;
    default:
        console.log("Peça inválida!");
        break;
}
