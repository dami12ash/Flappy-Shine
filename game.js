function startGame() {
  document.getElementById("menu").style.display = "none";
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.font = "30px Arial";
  ctx.fillText("Gioco avviato!", 120, 300);
}
function showLeaderboard() { alert("Classifica in arrivo"); }
function showSkins() { alert("Skin disponibili in arrivo"); }
function showSettings() { alert("Impostazioni in arrivo"); }