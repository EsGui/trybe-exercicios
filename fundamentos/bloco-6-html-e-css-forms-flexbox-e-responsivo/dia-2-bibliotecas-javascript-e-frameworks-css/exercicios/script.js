

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

/* let botaoEnviaTudo = document.querySelector("#envia-tudo") 

botaoEnviaTudo.addEventListener("click", function (event) {
    event.preventDefault();
}) */

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

let datePickerX = document.getElementById("data").DatePickerX.init();

/* import JustValidate from 'just-validate'; */

const validation = new window.JustValidate('#formulario');

validation
  .addField('#input-text', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 20,
    },
    {
        rule: 'required',
        errorMessage: 'Nome is required',
    }
  ])
  .addField('#input-email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ])
  .addField('#input-cpf', [
    {
      rule: 'required',
      errorMessage: 'CPF is required',
    },
    {
      rule: "maxLength",
      value: 11,
      }
  ])
  .addField("#input-endereco", [
      {
          rule: 'required',
          errorMessage: 'Address is required', 
      },
      {
          rule: 'maxLength',
          value: 200,
      }
  ])
  .addField("#input-cidade", [
      {
          rule: 'required',
          errorMessage: "City is required",
      },
      {
          rule: 'maxLength',
          value: 28,
      }
  ])
  .addField("#dropdown-estado", [
      {
          rule: 'required',
          errorMessage: "state is required",
      }
  ])
  .addField("#resumo-curriculo", [
      {
          rule: 'required',
          errorMessage: "resume is required",
      },
      {
          rule: 'maxLength',
          value: 1000,
      }
  ])
  .addField("#seu-cargo", [
      {
          rule: 'required',
          errorMessage: 'office is required',
      },
      {
          rule: "maxLength",
          value: 40,
      }
  ])
  .addField("#descricao-do-cargo", [
      {
          rule: 'required',
          errorMessage: 'Description is required',
      },
      {
          rule: 'maxLength',
          value: 500
      }
  ])