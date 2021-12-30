/* 

1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

*/

function verificaPalindromo(palavra) {
    let original = palavra
    if (original === palavra.split("").reverse().join("")) {
        return true
    } else {
        return false 
    }
}

console.log(verificaPalindromo("arara"));


