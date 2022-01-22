# Exercicios do dia - 8.4 - JavaScript ES6 - Higher Order Function - reduce

## Exercício de fixação

Crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!

    const estudantes = [
    {
        nome: 'Jorge',
        sobrenome: 'Silva',
        idade: 14,
        turno: 'Manhã',
        materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
        ],
    },
    {
        nome: 'Mario',
        sobrenome: 'Ferreira',
        idade: 15,
        turno: 'Tarde',
        materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
        ],
    },
    {
        nome: 'Jorge',
        sobrenome: 'Santos',
        idade: 15,
        turno: 'Manhã',
        materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
        ],
    },
    {
        nome: 'Maria',
        sobrenome: 'Silveira',
        idade: 14,
        turno: 'Manhã',
        materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
        ],
    },
    {
        nome: 'Natalia',
        sobrenome: 'Castro',
        idade: 14,
        turno: 'Manhã',
        materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
        ],
    },
    {
        nome: 'Wilson',
        sobrenome: 'Martins',
        idade: 14,
        turno: 'Manhã',
        materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
        ],
    },
    ];

## Exercícios do dia 

1 - Dada uma matriz, transforme em um array.

    const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
    ];

    function flatten() {
    // escreva seu código aqui
    }

Para os exercícios 2, 3 e 4 considere o seguinte array:

    const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
        name: 'Frank Herbert',
        birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
        name: 'Stephen King',
        birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
        },
        releaseYear: 1928,
    },
    ];

    // Adicione o código do exercício aqui:

2 - Crie uma string com os nomes de todas as pessoas autoras.

    const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

    function reduceNames() {
    // escreva seu código aqui
    }

3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

    const expectedResult = 43;

    function averageAge() {
    // escreva seu código aqui
    }

4 - Encontre o livro com o maior nome.


    const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
    },
    releaseYear: 1991,
    };

    function longestNamedBook() {
    // escreva seu código aqui
    }

5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

    const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
    ];

    function containsA() {
    // escreva seu código aqui
    }

6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected.

    const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
    const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

    function studentAverage() {
    // escreva seu código aqui
    }

    const expected = [
    { name: 'Pedro Henrique', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
    ];
