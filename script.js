let canvas = document.getElementById("snake");

// Trata o arquivo como sendo um plano 2D
let context = canvas.getContext("2d");
let box = 32;

// Criando função para iniciar o background
function criarBG(){
    context.fillStyle = "lightgreen";  // Trabalha com o estilo
    context.fillRect(0, 0, 16 * box, 16 * box); // Desenha o retângulo do jogo
}

criarBG();