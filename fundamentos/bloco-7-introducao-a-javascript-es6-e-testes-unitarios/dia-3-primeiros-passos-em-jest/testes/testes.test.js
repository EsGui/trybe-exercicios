/* 

1 - A função sum(a, b) retorna a soma do parâmetro a com o b

    1. Teste se o retorno de sum(4, 5) é 9

    2. Teste se o retorno de sum(0, 0) é 0

    3. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)

    4. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

*/

const { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate } = require('./../exercicios');

describe('Requisito 1 - A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    test('1.1 - Soma de 4 e 5 tem que ser igual a 9', () => {
        expect(sum(4, 5)).toEqual(9);
    });
    test('1.2 - Soma de 0 e 0 tem que ser igual a 0', () => {
        expect(sum(0, 0)).toEqual(0);
    });
    test('1.3 - Verifica se ocorre erro quando Somado 4 + "5"', () => {
        expect(() => {sum()}).toThrow()
    })
    test('1.4 - Verifica se a mensagem de erro é "parameters must be numbers"', () => {
        expect(() => {sum()}).toThrow();
    });
});


/* 

2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

    1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado

    2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

    3. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

*/

describe('Requisito 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
    test('2.1 - Verifique se a chama myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });
    test('2.2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    test('2.3 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
});

/* 

3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

    1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado

    2. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado

    3. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado

    4. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado

    5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

*/

describe('Requisito 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
    test('3.1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz')
    });
    test('3.2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(3)).toEqual('fizz');
    });
    test('3.3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(5)).toEqual('buzz');
    });
    test('3.4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(2)).toEqual(2)
    });
    test('3.5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz("b")).toEqual(false)
   });
});


/*

4 - Para as funções encode e decode crie os seguintes testes em Jest:

    1. Teste se encode e decode são funções;

    2. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;

    3. Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;

    4. Teste se as demais letras/números não são convertidos para cada caso;

    5. Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

*/

describe('Requisito 4 - Para as funções encode e decode crie os seguintes testes em Jest:', () => {
    test('4.1 - Teste se encode e decode são funções', () => {
        expect(typeof encode).toEqual('function');
        expect(typeof decode).toEqual('function');
    });
    test('4.2 - Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('aeiou')).toEqual('12345');
    });
    test('4.3 - Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
        expect(decode('12345')).toEqual('aeiou');
    });
    test('4.4 - Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(encode('ana')).toEqual('1n1');
        expect(decode('161')).toEqual('a6a');
    });
    test('4.5 - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(encode('aeiiiea').length).toEqual(7)
    })
});

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

describe('Requisito 5 - Testa a função techList', () => {
  it('5.1 - Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('5.2 - Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('5.3 - Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
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
  it('5.4 - Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

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