/* 

2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

*/

const sorteio = (number, action) => {
    let sorteado = 0;
    sorteado = Math.random() * (number + 1);  
    if (sorteado >= 0 && sorteado <= 1) {
        sorteado = 1;
    }
    action(parseInt(sorteado));
}

sorteio(5, (number) => {
    let sorteado = Math.random() * (5 + 1);
    if (parseInt(sorteado) === number) {
        console.log('Parabéns você ganhou');
    } else {
        console.log('Tente novamente');
    }
})


