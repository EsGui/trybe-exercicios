/* 

1 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

3 - Crie uma função para mostrar o tamanho de um objeto.

4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

console.log(allLessons);

{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};


6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

*/

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
}

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
}

const turnoLesson2 = (lesson2, turno, noite) => {
    lesson2[turno] = noite;
    console.log(lesson2)
}

turnoLesson2(lesson2, 'turno', 'noite')

const listaKeys = (objeto) => {
    for (let i in Object.keys(objeto)) {
        console.log(Object.keys(objeto)[i]);
    }
}

listaKeys(lesson1);

const tamanhoObjeto = (objeto) => {
    const contaArray = Object.entries(objeto).length;
    console.log(contaArray)
}

tamanhoObjeto(lesson1);

const listaValores = (objeto) => {
    for (let i in Object.values(objeto)) {
        console.log(Object.values(objeto)[i])
    }
}

listaValores(lesson1);
    
const allLessons =  Object.assign({}, {lesson1, lesson2, lesson3});

const pegaChaves = Object.values(allLessons);

const somaEstudantes = () => {
    soma = 0;
    for(let valor of pegaChaves) {
        soma += valor.numeroEstudantes;
    }
    return soma 
}

console.log(`A soma de todos os estudantes é igual á ${somaEstudantes()}`);


const pegaChave = (objeto, indice) => {
    const recebeObjetos = Object.entries(objeto);
    let array = [];
    for(let valor in recebeObjetos) {
        array.push(recebeObjetos[valor].shift());
    }
    return array[indice];
}

console.log(pegaChave(lesson1, 2));

const verificaValor = (objeto, chave, valor) => {
    if (objeto[chave] == valor) {
        return true;
    }
    return false;
}

console.log(verificaValor(lesson1, 'turno', 'manhã'));
