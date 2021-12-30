/* 

5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

    Margarida e Tio Patinhas
    Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
    Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
    Ambos recorrentes // Atenção para essa última linha!

*/

let info = {
    personagem: 'Margarida', 
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let info2 = {
    personagem: 'Tio Patinhas', 
    origem: 'Christmas on Bear Mountain, Dell"s Four Color Comics #178',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
    recorrente: 'Sim',
}

for (let item in info) {
    if (item === 'recorrente' && info[item] === "Sim" && info2[item] === 'Sim') {
        console.log('Ambos recorrentes')
    } else {
        console.log(info[item] + ' e ' + info2[item])
    }
}
