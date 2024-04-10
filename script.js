const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        this.classList.add("ativo");
        textos[i].classList.add("ativo");
    });
}

const contadores = document.querySelectorAll(".contador");
const tempos = [
    new Date("2022-10-05T00:00:00"),
    new Date("2023-12-05T00:00:00"),
    new Date("2023-12-30T00:00:00"),
    new Date("2024-02-01T00:00:00")
];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    
    return tempoFinal > 0 ? [dias, horas, minutos, segundos] : [0, 0, 0, 0];
}

function atualizaCronometro(){
    for (let i = 0; i < contadores.length; i++) {
        let tempoRestante = calculaTempo(tempos[i]);
        document.getElementById(`dias${i}`).textContent = tempoRestante[0];
        document.getElementById(`horas${i}`).textContent = tempoRestante[1];
        document.getElementById(`min${i}`).textContent = tempoRestante[2];
        document.getElementById(`seg${i}`).textContent = tempoRestante[3];
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
