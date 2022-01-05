//Adicionando dinâmicamente os estados e suas siglas

function estadosDinamicos() {
    let arraySiglas = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]
    let arrayNomes = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espirito Santo", "Goiás", "Maranhão", "Mato Grosso do Sul", "Mato Grosso", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]
    
    let selected = document.querySelector("#dropdown-estado");
    
    for (let index = 0; index < arraySiglas.length; index += 1){
        let criaOption = document.createElement("option");
        criaOption.value = arraySiglas[index];
        criaOption.innerText = arrayNomes[index];
        selected.appendChild(criaOption);
    }
}

estadosDinamicos();


/* 

3 - Logo abaixo do formulário, crie um botão que:

    Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit

*/

let botaoEnviaTudo = document.querySelector("#envia-tudo") 

botaoEnviaTudo.addEventListener("click", function (event) {
    event.preventDefault();
})

/* 

Data de início - Texto
                            
    Verificar o formato da data dd/mm/aaaa .
    O dia deve ser > 0 e <= 31.
    O mês deve ser > 0 e <= 12.
    O ano não pode ser negativo.
    Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.
    Campo obrigatório


    Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.

    Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.

    Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.

*/

let botaoTudo = document.querySelector("#envia-tudo")

botaoTudo.addEventListener("click", function () {
    let inputs = document.querySelectorAll("input");
    let textareas = document.querySelectorAll("textarea");
    let form = document.querySelector("form");
    let dia = parseInt(data.value[0] + data.value[1]);
    let mes = parseInt(data.value[3] + data.value[4]);
    let ano = parseInt(data.value[6] + data.value[7] + data.value[8] + data.value[9]);


    for (let index = 0; index < inputs.length; index += 1) {
        if (inputs[index].value != "") {
            let div = document.createElement("div");
            div.innerText = inputs[index].value;
            form.appendChild(div);
        }
    }
    for (let index = 0; index < textareas.length; index += 1) {
        if (textareas[index].value != "") {
            let div = document.createElement("div");
            div.innerText = textareas[index].value;
            form.appendChild(div);
        }
    }
    if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > 0 && ano <= 9999) {
        window.alert("Data correta");
    } else if (dia < 0 || dia > 31) {
        let divs = document.querySelectorAll("div");
        for (let index = 0; index < divs.length; index += 1) {
            divs[index].remove()
        }
        let div = document.createElement("div");
        div.innerText = "dia inválido!"
        form.appendChild(div);
    } else if (mes < 0 || mes > 12) {
        let divs = document.querySelectorAll("div");
        for (let index = 0; index < divs.length; index += 1) {
            divs[index].remove()
        }
        let div = document.createElement("div");
        div.innerText = "mês inválido"
        form.appendChild(div);
    } else if (ano < 0 || ano > 9999) {
        let divs = document.querySelectorAll("div");
        for (let index = 0; index < divs.length; index += 1) {
            divs[index].remove()
        }
        let div = document.createElement("div");
        div.innerText = "ano inválido"
        form.appendChild(div);
    }
})


/*

4 - Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.

*/

let apagaTudo = document.querySelector("#apaga-tudo");

apagaTudo.addEventListener("click", function () {
    let div = document.querySelectorAll("div");
    let inputs = document.querySelectorAll("input");
    let textareas = document.querySelectorAll("textarea");
    for (let index = 0; index < inputs.length; index += 1) {
        inputs[index].value = "";
    }
    for (let index = 0; index < textareas.length; index += 1) {
        textareas[index].value = "";
    }
    for (let index = 0; index < div.length; index += 1) {
        div[index].value = "";
    }
})







