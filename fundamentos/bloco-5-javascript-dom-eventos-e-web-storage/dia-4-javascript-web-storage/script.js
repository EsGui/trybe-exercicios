window.onload = function () {

    // Cor de fundo

    function cores() {
        let pegaCores = document.querySelectorAll(".cores-letras");
        let body = document.querySelector("body");
        for (let index = 0; index < pegaCores.length; index += 1) {
            pegaCores[index].addEventListener("click", function (event) {
                if (event.target === pegaCores[0]) {
                    body.style.backgroundColor = "red";
                } else if (event.target === pegaCores[1]) {
                    body.style.backgroundColor = "blue";
                } else if (event.target === pegaCores[2]) {
                    body.style.backgroundColor = "white";
                } else if (event.target === pegaCores[3]) {
                    body.style.backgroundColor = "orange"
                }
                localStorage.setItem("color", body.style.backgroundColor)
            })
            body.style.backgroundColor = localStorage.getItem("color");
        }
    }


    cores();

    // Tamanho da fonte

    function fontes() {
        let pegaFontes = document.querySelectorAll(".fontes-letras");
        let pegaParagrafos = document.querySelectorAll("p");
        for (let index = 0; index < pegaFontes.length; index += 1) {
            pegaFontes[index].addEventListener("click", function (event) {
                if (event.target === pegaFontes[0]) {
                    for (let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.fontSize = "10px";
                    }
                } else if (event.target === pegaFontes[1]) {
                    for (let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.fontSize = "20px";
                    }
                } else if (event.target === pegaFontes[2]) {
                    for (let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.fontSize = "30px";
                    }
                } else if (event.target === pegaFontes[3]) {
                    for (let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.fontSize = "40px";
                    }
                } for (let index = 0; index < pegaParagrafos.length; index += 1) {
                    localStorage.setItem("fontes", pegaParagrafos[index].style.fontSize);   
                }
            })
            for (let index = 0; index < pegaParagrafos.length; index += 1) {
                pegaParagrafos[index].style.fontSize = localStorage.getItem("fontes")
            }
        }
    }

    fontes();

    // Estilo da fonte

    function estiloFonte () {
        let pegaFonte = document.querySelectorAll(".estilos-letras")
        let pegaParagrafos = document.querySelectorAll("p");
        for (let index = 0; index < pegaFonte.length; index += 1) {
            pegaFonte[index].addEventListener("click", function (event) {
                if (event.target === pegaFonte[0]) {
                    for (let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.fontFamily = "Arial";
                    }
                } else if (event.target === pegaFonte[1]) {
                    for(let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.fontFamily = "fantasy";
                    }
                } for (let index = 0; index < pegaParagrafos.length; index += 1) {
                    localStorage.setItem("estiloFonte", pegaParagrafos[index].style.fontFamily);
                }
            })
            for (let index = 0; index < pegaParagrafos.length; index += 1) {
                pegaParagrafos[index].style.fontFamily = localStorage.getItem("estiloFonte");
            }
        }
    }

    estiloFonte();

    // Cor das letras

    function corLetras() {
        let pegaCores = document.querySelectorAll(".cor-fundo");
        let pegaParagrafos = document.querySelectorAll("p");
        for (let index = 0; index < pegaCores.length; index += 1) {
            pegaCores[index].addEventListener("click", function (event) {
                if (event.target === pegaCores[0]) {
                    for (let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.color = "white";
                    }
                } else if (event.target === pegaCores[1]) {
                    for (let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.color = "gray";
                    }
                } else if (event.target === pegaCores[2]) {
                    for (let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.color = "orange";
                    }
                } else if(event.target === pegaCores[3]) {
                    for (let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.color = "black";
                    }
                } for (let index = 0; index < pegaParagrafos.length; index += 1) {
                    localStorage.setItem("corLetra", pegaParagrafos[index].style.color);
                }
            })
            for (let index = 0; index < pegaParagrafos.length; index += 1) {
                pegaParagrafos[index].style.color = localStorage.getItem("corLetra");
            }
        }
    }

    corLetras();

    // Espaço entre os parágrafos

    function espaco () {
        let pegaEspaco = document.querySelectorAll(".espaco-linhas");
        let pegaParagrafos = document.querySelectorAll("p");
        for (let index = 0; index < pegaEspaco.length; index += 1) {
            pegaEspaco[index].addEventListener("click", function (event) {
                if (event.target === pegaEspaco[0]) {
                    for (let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.lineHeight = "10px";
                    }
                } else if (event.target === pegaEspaco[1]) {
                    for (let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.lineHeight = "20px";
                    }
                } else if (event.target === pegaEspaco[2]) {
                    for (let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.lineHeight = "30px";
                    }
                } else if (event.target === pegaEspaco[3]) {
                    for (let index = 0; index < pegaParagrafos.length; index += 1) {
                        pegaParagrafos[index].style.lineHeight = "40px";
                    }
                } for (let index = 0; index < pegaParagrafos.length; index += 1) {
                    localStorage.setItem("espaco", pegaParagrafos[index].style.lineHeight);
                }
            })
            for (let index = 0; index < pegaParagrafos.length; index += 1) {
                pegaParagrafos[index].style.lineHeight = localStorage.getItem("espaco");
            }
        }
    }
    espaco();
}
