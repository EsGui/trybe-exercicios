/* 

1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = () => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

*/

const pessoaContratada = (nomeCompleto) => nomeCompleto;

const newEmployees = () => {
    const employees = {
        id1: '',
        id2: '',
        id3: '',
    }
    employees.id1 = `${pessoaContratada('Pedro Guerra')}, ${pessoaContratada('Pedro Guerra').toLowerCase().split(' ').join('_')}${`@trybe.com`}`;
    employees.id2 = `${pessoaContratada('Luiza Drumond')}, ${pessoaContratada('Luiza Drumond').toLowerCase().split(' ').join('_')}${`@trybe.com`}`;
    employees.id3 = `${pessoaContratada('Carla Paiva')}, ${pessoaContratada('Carla Paiva').toLowerCase().split(' ').join('_')}${`@trybe.com`}`;
    return employees;
}

console.log(newEmployees(pessoaContratada()));