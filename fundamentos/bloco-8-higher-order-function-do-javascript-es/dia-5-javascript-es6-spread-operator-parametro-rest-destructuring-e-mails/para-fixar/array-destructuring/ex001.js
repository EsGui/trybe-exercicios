/* 

1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

*/

const saudacoes = ['olá', (saudacao) => console.log(saudacao)];
/* saudacoes[1](saudacoes[0]); // Olá */

const [string, funcao] = saudacoes;
funcao(string);
