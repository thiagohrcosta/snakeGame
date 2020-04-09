let canvas = document.getElementById("snake");

// Trata o arquivo como sendo um plano 2D
let context = canvas.getContext("2d");
let box = 32;

// Array da Snake
let snake = [];

snake[0]= {
    x: 8 * box,
    y: 8 * box
}

// Criando função para iniciar o background
function criarBG(){
    context.fillStyle = "lightgreen";  // Trabalha com o estilo
    context.fillRect(0, 0, 16 * box, 16 * box); // Desenha o retângulo do jogo
}


function criarSnake(){
    for (i =0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarSnake();