let slot=[
 '<img onclick="gira()"src="https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/7-512.png" height="500" width="400"></img>',
'<img onclick="gira()"src="https://cdn3.iconfinder.com/data/icons/casino/256/Grapes-512.png" height="500" width="400"></img>',
'<img onclick="gira()"src="https://cdn3.iconfinder.com/data/icons/casino/256/Lemon-512.png" height="500" width="400"></img>',
'<img onclick="gira()"src="https://cdn3.iconfinder.com/data/icons/casino/256/Watermelon-512.png" height="500" width="400"></img>',
'<img onclick="gira()"src="https://cdn3.iconfinder.com/data/icons/casino/256/Bell-512.png" height="500" width="400"></img>'
];
let betAmount=50;
function updateBetDisplay(){
document.getElementById("bet-display").innerText=betAmount;
}
function increaseBet(){
if(betAmount+10<=balance){
betAmount+=10;
updateBetDisplay();
}
}
function decreaseBet(){
if(betAmount-10>=10){
betAmount-=10;
updateBetDisplay();
}
}
function gira(){
if(!placeBet(betAmount)){
displayResult("Not enough balance to spin.");
return;
}
const slots=[document.getElementById('slot1'),document.getElementById('slot2'),document.getElementById('slot3')];
slots.forEach(slot=>slot.classList.add('spin-animation'));
setTimeout(()=>{
let s1=Math.floor(Math.random()*slot.length);
let s2=Math.floor(Math.random()*slot.length);
let s3=Math.floor(Math.random()*slot.length);
slots[0].innerHTML=slot[s1];
slots[1].innerHTML=slot[s2];
slots[2].innerHTML=slot[s3];
slots.forEach(slot=>slot.classList.remove('spin-animation'));
if(s1===s2&&s2===s3){
let winnings=betAmount*10;
addWinnings(winnings);
displayResult(`🎉 JACKPOT! You won $${winnings}`);
}else if(s1===s2||s2===s3||s1===s3){
let winnings=betAmount*2;
addWinnings(winnings);
displayResult(`😊 Two match! You won $${winnings}`);
}else{
displayResult("😢 Try again!");
}
},700);
}
function displayResult(message){
document.getElementById("result").innerText=message;
}
window.onload=()=>{
updateBalanceDisplay();
updateBetDisplay();
};
