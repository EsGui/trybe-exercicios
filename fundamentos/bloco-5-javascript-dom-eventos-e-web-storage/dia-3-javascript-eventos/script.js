/* 

Exercício 1:

O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

    Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

    Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

    Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let naoOrdenada = document.querySelector("#days")

for (let index = 0; index < dezDaysList.length; index += 1) {
    let lista = document.createElement("li");
    lista.innerText = dezDaysList[index];
    lista.classList.add("day")
    naoOrdenada.appendChild(lista);
}

let pegaLista = document.querySelectorAll("li");

for (let index = 0; index < pegaLista.length; index += 1) {
    if (pegaLista[index].innerText === "24" || pegaLista[index].innerText === "25" || pegaLista[index].innerText === "31") {
        pegaLista[index].classList.add("holiday")
    } else if (pegaLista[index].innerText === "4" || pegaLista[index].innerText === "11" || pegaLista[index].innerText === "18") {
        pegaLista[index].classList.add("friday");
    } 
}

for (let index = 0; index < pegaLista.length; index += 1) {
    if (pegaLista[index].innerText === "25") {
        pegaLista[index].classList.add("friday");
    }
}

/* 

Exercício 2:

Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

    Adicione a este botão a ID "btn-holiday".

    Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

*/

function feriado(string) {
    let buttonsContainer = document.querySelector(".buttons-container");
    let botaoFeriado = document.createElement("button");
    botaoFeriado.innerText = string;
    botaoFeriado.id = "btn-holiday";
    buttonsContainer.appendChild(botaoFeriado);
}

feriado("Feriado");

/* 

Exercício 3:

Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".

    É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

*/

function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  
  displayHolidays();

/* 

Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

    Adicione a este botão o ID "btn-friday" .
    Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

*/


function botaoSexta () {
    let botaoSexta = document.createElement("button");
    let buttonsContainer = document.querySelector(".buttons-container");
    botaoSexta.id = "btn-friday";
    botaoSexta.innerText = "Sexta-feira";
    buttonsContainer.appendChild(botaoSexta);
}

botaoSexta();

/* 

Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

    É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

*/

function mudaTexto () {
    let array = [4, 11, 18, 25]
    let friday = document.querySelectorAll(".friday");
    let botao = document.querySelector("#btn-friday");
    botao.addEventListener("click", function(){
        for (let index = 0; index < friday.length; index += 1) {
            if (friday[index].innerHTML === "Sexta!!!") {
                friday[index].innerHTML = array[index];
            } else {
                friday[index].innerHTML = "Sexta!!!"
            }
        }
    })
}

mudaTexto();


/* 

Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
    
    Dica - Propriedade: event.target .

*/

function colocaZoom() {
    let day = document.querySelectorAll(".day");
    for (let index = 0; index < day.length; index += 1) {
        day[index].addEventListener("mouseover", function (event) {
            event.target.style.fontSize = "30px";
        })
    }
}

colocaZoom();

function tiraZoom() {
    let day = document.querySelectorAll(".day");
    for(let index = 0; index < day.length; index += 1) {
        day[index].addEventListener("mouseout", function (event) {
            if (event.target.style.fontSize === "30px") {
                event.target.style.fontSize = "20px";
            } else {
                event.target.style.fontSize = "30px";
            }
        })
    }
}

tiraZoom();

/* 

Exercício 7:


Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

    O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

*/

function adicionaTarefa(message) {
    let botaoAdiciona = document.querySelector("#btn-add");
    let myTasks = document.querySelector(".my-tasks");
    
    let span = document.createElement("span");
    span.innerText = message;
    myTasks.appendChild(span);
}

adicionaTarefa("Projeto:");

/* 

Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.

    O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.

    O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

*/

function estiliza(cor) {
    let div = document.createElement("div");
    let myTasks = document.querySelector(".my-tasks")
    div.classList.add("task");
    div.style.backgroundColor = cor;
    myTasks.appendChild(div);
}

estiliza("red");

/* 

Exercício 9:

Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.

    Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.


*/

function adicionaClasse () {
    let div = document.querySelector(".task");
    div.addEventListener("click", function (event) {
        if (event.target.classList.contains("selected")) {
            event.target.classList.remove("selected");
        } else {
            event.target.classList.add("selected");
        }
    })
}

adicionaClasse();

/* 

Exercício 10:
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

    Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .


*/

function mudaCorDia () {
    let dias = document.querySelectorAll(".day");
    for (let index = 0; index < dias.length; index += 1) {
        dias[index].addEventListener("click", function (event) {
            if (event.target.style.color === "red") {
                event.target.style.color = "rgb(119,119,119)";
            } else {
                event.target.style.color = "red"
            }
        })
    }
}

mudaCorDia();