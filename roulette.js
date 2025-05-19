let spinning = false;
let angle = 0;
let speed = 0;
let friction = 0.985;
let animationFrame;
const red = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);
const black = new Set([2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]);
function spinRoulette() {
if (spinning) return;
const betAmount = parseInt(document.getElementById('betAmount').value); 
const betNumber = parseInt(document.getElementById('betNumber').value);
const betColor = document.getElementById('betColor').value;
if (!placeBet(betAmount)) return;
spinning = true;
spinRoulette.betAmount = betAmount;
spinRoulette.betNumber = isNaN(betNumber) ? null : betNumber;
spinRoulette.betColor = betColor;
speed = Math.random() * 30 + 25;
animateSpin();
}
function animateSpin() {
angle += speed;
speed *= friction;
const rodinha = document.getElementById('rodinha');
rodinha.style.transform = `rotate(${angle % 360}deg)`;
if (speed > 0.1) {
animationFrame = requestAnimationFrame(animateSpin);
} else {
cancelAnimationFrame(animationFrame);
spinning = false;
const result = calculateRouletteResult(angle);
const color = getRouletteColor(result);
evaluateBet(result, color);
const resultDisplay = document.getElementById('result');
resultDisplay.innerHTML = `Result: <strong style="color: ${color};">${result} (${color.toUpperCase()})</strong>`;
}}
function calculateRouletteResult(finalAngle) {
const normalized = finalAngle % 360;
const segmentSize = 360 / 37;
return Math.floor(normalized / segmentSize);
}
function getRouletteColor(number) {
if (number === 0) return 'green';
if (red.has(number)) return 'red';
if (black.has(number)) return 'black';
return 'gray';
}
function evaluateBet(resultNumber, resultColor) {
const betAmount = spinRoulette.betAmount;
const betNumber = spinRoulette.betNumber;
const betColor = spinRoulette.betColor;
let winnings = 0;
if (betNumber !== null && betNumber === resultNumber) {
winnings += betAmount * 35;
}
if (betColor && betColor === resultColor) {
winnings += betAmount * 2;
}
if (winnings > 0) {
addWinnings(winnings);
showMessage(`You won $${winnings}!`, true);
} else {
showMessage("You lost the bet!", false);
}}
function showMessage(message, isWin) {const existing = document.getElementById("message");
  if (existing) existing.remove();
  const messageDiv = document.createElement("div");
  messageDiv.id = "message";
  messageDiv.textContent = message;
  messageDiv.className = isWin ? "win" : "loss";
  document.body.appendChild(messageDiv);
  setTimeout(() => {
    messageDiv.remove();}, 3000);
}
