
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
canvas.width = 480;
canvas.height = 640;

let gravity = 0.5;
let flap = -8;
let birdY = canvas.height / 2;
let velocity = 0;
let isGameOver = false;
let coinCount = 0;

function startGame() {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("gameOver").classList.add("hidden");
  birdY = canvas.height / 2;
  velocity = 0;
  coinCount = 0;
  isGameOver = false;
  requestAnimationFrame(gameLoop);
}

function gameLoop() {
  if (isGameOver) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  velocity += gravity;
  birdY += velocity;

  // Draw bird (as a circle)
  ctx.beginPath();
  ctx.arc(100, birdY, 20, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();

  // Simulate ground hit
  if (birdY > canvas.height) {
    endGame();
    return;
  }

  requestAnimationFrame(gameLoop);
}

canvas.addEventListener("click", () => {
  if (!isGameOver) velocity = flap;
});

function endGame() {
  isGameOver = true;
  document.getElementById("coinsEarned").textContent = coinCount;
  document.getElementById("gameOver").classList.remove("hidden");
}

function restartGame() {
  startGame();
}

function showLeaderboard() {
  alert("Classifica in arrivo...");
}

function showShop() {
  alert("Skin e shop disponibili nella versione completa!");
}

function showSettings() {
  alert("Impostazioni personalizzabili nella versione completa!");
}
