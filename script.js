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


// Alimentos
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
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

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";

}

function iniciarJogo(){

    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    criarBG();
    criarSnake();
    drawFood();
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


