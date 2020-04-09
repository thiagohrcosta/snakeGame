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

// Criar variável para direção
let direction = "right";


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

function iniciarJogo(){
    criarBG();
    criarSnake();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if (direction = "up") snakeY -= box;    
    if (direction = "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX, 
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);


