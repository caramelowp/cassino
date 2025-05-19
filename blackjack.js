const cards = [
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/k2.png', value: 2},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/k3.png', value: 3},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/k4.png', value: 4},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/k5.png', value: 5},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/k6.png', value: 6},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/k7.png', value: 7},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/k8.png', value: 8},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/k9.png', value: 9},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/k10.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/kj.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/kq.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/kk.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/ka.png', value: 11},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/s2.png', value: 2},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/s3.png', value: 3},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/s4.png', value: 4},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/s5.png', value: 5},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/s6.png', value: 6},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/s7.png', value: 7},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/s8.png', value: 8},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/s9.png', value: 9},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/s10.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/sj.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/sq.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/sk.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/sa.png', value: 11},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/p2.png', value: 2},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/p3.png', value: 3},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/p4.png', value: 4},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/p5.png', value: 5},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/p6.png', value: 6},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/p7.png', value: 7},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/p8.png', value: 8},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/p9.png', value: 9},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/p10.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/pj.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/pq.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/pk.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/pa.png', value: 11},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/l2.png', value: 2},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/l3.png', value: 3},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/l4.png', value: 4},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/l5.png', value: 5},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/l6.png', value: 6},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/l7.png', value: 7},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/l8.png', value: 8},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/l9.png', value: 9},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/l10.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/lj.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/lq.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/lk.png', value: 10},
{ src:'https://improvemagic.com/wp-content/uploads/2020/11/la.png', value: 11},
];
let playerHand=[];
let dealerHand=[];
let currentBet=0;
let gameStarted=false;
function placeChip(amount){
if(gameStarted){
showResult("Finish the current game before changing the bet.");
return;
}
if(placeBet(amount)){
currentBet+=amount;
document.getElementById('current-bet').innerText=currentBet;
showResult(`Bet increased by $${amount}`);
}else{
showResult("Not enough balance to place that bet.");
}
}
function startGame(){
if(currentBet<=0){
showResult("Please place a bet to start.");
return;
}
playerHand=[getRandomCard(),getRandomCard()];
dealerHand=[getRandomCard(),getRandomCard()];
updateHands();
document.getElementById('result').innerText='';
gameStarted=true;
}
function hit(){
if(!gameStarted)return;
playerHand.push(getRandomCard());
updateHands();
const score=calculateScore(playerHand);
if(score>21){
showResult("You busted!");
endGame();
}}
function stand(){
if(!gameStarted)return;
let dealerScore=calculateScore(dealerHand);
while(dealerScore<17){
dealerHand.push(getRandomCard());
dealerScore=calculateScore(dealerHand);
}
updateHands(true);
const playerScore=calculateScore(playerHand);
let resultText="";
if(dealerScore>21||playerScore>dealerScore){
const winnings=currentBet*2;
addWinnings(winnings);
resultText=`You win! You earned $${winnings}`;
}else if(playerScore===dealerScore){
addWinnings(currentBet);
resultText="It's a tie! Your bet was returned.";
}else{
resultText="Dealer wins! You lost your bet.";
}
showResult(resultText);
endGame();
}
function endGame(){
gameStarted=false;
currentBet=0;
document.getElementById('current-bet').innerText='0';
}
function getRandomCard(){
return cards[Math.floor(Math.random()*cards.length)];
}
function updateHands(revealDealer=false){
const playerHandDiv=document.getElementById('player-hand');
const dealerHandDiv=document.getElementById('dealer-hand');
playerHandDiv.innerHTML='';
dealerHandDiv.innerHTML='';
playerHand.forEach(card=>{
const img=document.createElement('img');
img.src=card.src;
img.width=80;
img.height=120;
playerHandDiv.appendChild(img);
});
dealerHand.forEach((card,index)=>{
const img=document.createElement('img');
img.src=(index===0||revealDealer)?card.src:'https://c8.alamy.com/comp/FYWKWK/card-back-FYWKWK.jpg';
img.width=80;
img.height=120;
dealerHandDiv.appendChild(img);
});
document.getElementById('player-score').innerText='Score: '+calculateScore(playerHand);
document.getElementById('dealer-score').innerText='Score: '+(revealDealer?calculateScore(dealerHand):'?');
}
function calculateScore(hand){
let total=0;
let aces=0;
hand.forEach(card=>{
total+=card.value;
if(card.value===11)aces++;
});
while(total>21&&aces>0){
total-=10;
aces--;
}
return total;
}
function showResult(message){
const resultDiv=document.getElementById('result');
resultDiv.innerText=message;
resultDiv.style.color='white';
resultDiv.style.backgroundColor='#333';
resultDiv.style.padding='10px';
resultDiv.style.marginTop='10px';
resultDiv.style.borderRadius='5px';
setTimeout(()=>{
resultDiv.innerText='';
resultDiv.style='';
},4000);
}
