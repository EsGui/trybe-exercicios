/* 

1 - A função sum(a, b) retorna a soma do parâmetro a com o b

    1. Teste se o retorno de sum(4, 5) é 9

    2. Teste se o retorno de sum(0, 0) é 0

    3. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)

    4. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

 */

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }
    return a + b;
}

/* 

2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

    Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado.

    Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].

    Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.


*/

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

/* 

3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

    Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado

    Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado

    Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado

    Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado

    Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

*/

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num 
}

/* 

4 - Para as funções encode e decode crie os seguintes testes em Jest:

    Teste se encode e decode são funções;

    Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;

    Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;

    Teste se as demais letras/números não são convertidos para cada caso;

    Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

*/

function encode(vogal) {
    let dividido = vogal.split('');
    for (let index = 0; index < dividido.length; index += 1){
        if (dividido[index] == 'a') {
            dividido[index] = 1;
        } else if (vogal[index] == 'e') {
            dividido[index] = 2;
        } else if (vogal[index] == 'i') {
            dividido[index] = 3;
        } else if (vogal[index] == 'o') {
            dividido[index] = 4;
        } else if (vogal[index] == 'u') {
            dividido[index] = 5;
        }
    }
    return dividido.join(['']);
}

function decode(vogal) {
    let dividido = vogal.split('');
    for (let index = 0; index < dividido.length; index += 1){
        if (dividido[index] == 1) {
            dividido[index] = 'a';
        } else if (vogal[index] == 2) {
            dividido[index] = 'e';
        } else if (vogal[index] == 3) {
            dividido[index] = 'i';
        } else if (vogal[index] == 4) {
            dividido[index] = 'o'
        } else if (vogal[index] == 5) {
            dividido[index] = 'u';
        }
    }
    return dividido.join(['']);
}

/* 

5 - A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

    {
        tech: 'nomeTecnologia',
        name: name,
    }

Implemente a função techList a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto! É importante nunca alterar os testes ou as variáveis já escritas no código.

const techList = require('./techList.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

module.exports = techList;

*/

function techList(listaTech, name) {
    let array2 = []
    if (listaTech.length === 0) {
      return "Vazio!"
    } else {
      listaTech.sort();
      for (let index = 0; index < listaTech.length; index += 1) {
        let objeto = {
          tech: listaTech[index],
          name: name
        }
        array2.push(objeto)
      }
    }
    return array2
  }

/* 

6 - A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:

    // string recebida
    '1 cerveja'
    // retorno da função
    '1 copo de água'

    // string recebida
    '1 cerveja, 2 shots e 1 catuaba'
    // retorno da função
    '4 copos de água'

    // string recebida
    '2 caipirinhas'
    // retorno da função
    '2 copos de água'

Implemente a função hydrate a partir dos testes abaixo. Experimente refatorar a função que você criou para o projeto Playground Function! É importante nunca alterar os testes ou as variáveis já escritas no código.

const hydrate = require('./hydrate.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

*/

function hydrate(frase) {
  let divisao = frase.split(' ');
  let array = [];
  for (let index = 0; index < divisao.length; index += 1) {
    if (divisao[index] == parseInt(divisao[index])) {
      array.push(parseInt(divisao[index]));
    }
  }
  let soma = 0
  for (let num of array) {
    soma += num;
  }
  if (soma > 1) {
    return soma + ' copos de água'
  } else {
    return soma + ' copo de água'
  }
}

module.exports = { 
    sum, 
    myRemove, 
    myFizzBuzz,
    encode,
    decode,
    techList,
    hydrate
};
