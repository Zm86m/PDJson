const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

// Ball properties
let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    dx: 2,
    dy: -2,
    radius: 10
};

// Paddle properties
let paddleHeight = 100;
let paddleWidth = 10;
let leftPaddleY = (canvas.height - paddleHeight) / 2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(x, y) {
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, paddleWidth, paddleHeight);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawPaddle(0, leftPaddleY);

    ball.x += ball.dx;
    ball.y += ball.dy;

    // Add collision detection logic here

    requestAnimationFrame(draw);
}

draw();
