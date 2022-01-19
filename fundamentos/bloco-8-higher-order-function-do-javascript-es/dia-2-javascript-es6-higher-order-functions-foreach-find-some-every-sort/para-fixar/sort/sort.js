/* 

1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

*/

const people = [
    {name: 'mateus', age: 18},
    {name: 'José', age: 16},
    {name: 'Ana', age: 23},
    {name: 'Cláudia', age: 20},
    {name: 'Bruna', age: 19},
]

people.sort((a, b) => a.age - b.age)
console.log(people);
people.sort((a, b) => b.age - a.age)
console.log(people);


