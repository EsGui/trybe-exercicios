/* 

3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

    Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

*/

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let contador = 0;
let prossiga = 0;

const testeProva = (respostas, respostaEstudantes, action ) => {
    respostas = RIGHT_ANSWERS
    respostaEstudantes = STUDENT_ANSWERS
    action();
} 

testeProva(RIGHT_ANSWERS, STUDENT_ANSWERS, action = () => {
    for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
        if (STUDENT_ANSWERS[prossiga] === RIGHT_ANSWERS[index]) {
            contador += 1;
        } else {
            contador -= 0.5;
        }
        prossiga += 1;
    }
    console.log(contador)
})