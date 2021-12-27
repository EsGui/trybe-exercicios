/* 

Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".

Implemente condicionais para que:

Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".

Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

*/

var weekDay = "Sábado";

if (weekDay === "Segunda" || weekDay === "Serça" || weekDay === "Quarta" || weekDay === "Quinta" || weekDay === "Sexta") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else if (weekDay === "Sábado" || weekDay === "Domingo") {
    console.log("FINALMENTE, descanso merecido UwU")
}