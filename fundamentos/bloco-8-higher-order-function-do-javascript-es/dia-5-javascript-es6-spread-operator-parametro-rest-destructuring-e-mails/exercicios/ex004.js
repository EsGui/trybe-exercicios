/* 

4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
Dica: use object destructuring . 

*/

const people = [
    {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        BornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    }
]

const filterPeople = () => {
   const pessoas20 = people.filter(({nationality, bornIn}) => {
        return bornIn >= 1901 && bornIn <= 2000 && nationality === 'Australian';
    });
    return pessoas20;
};
   


console.log(filterPeople());