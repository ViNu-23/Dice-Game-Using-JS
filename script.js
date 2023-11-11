const reloader = document.querySelector('.reload').addEventListener('click',refreshPage);
function refreshPage(){
    window.location.reload();
    console.log('he refresher');
}
//player1
const randomNumber= Math.floor(Math.random()*6)+1;
const diceNumber =`inverted-dice-${randomNumber}.png`;
const diceImg = `dice/${diceNumber}`;
const image = document.querySelector('.img1');
image.setAttribute('src',diceImg);

//player2
const randomNumber2= Math.floor(Math.random()*6)+1;
const diceNumber2 =`inverted-dice-${randomNumber2}.png`;
const diceImg2 = `dice/${diceNumber2}`;
const image2 = document.querySelector('.img2');
image2.setAttribute('src',diceImg2);

//winner display
const errorDiv = document.createElement('div');
errorDiv.className = 'winner';
const effect = document.querySelector('.left-player')
const effect2 = document.querySelector('.right-player')

//result
if (randomNumber > randomNumber2) {
  errorDiv.appendChild(document.createTextNode('Player 1 Won')); 
  effect.style.backgroundColor=`#9AE6B4`;
  effect2.style.backgroundColor=`#FEB2B2`;

} else if (randomNumber < randomNumber2) {
  errorDiv.appendChild(document.createTextNode('Player 2 Won')); 
  effect2.style.backgroundColor=`#9AE6B4`;
  effect.style.backgroundColor=`#FEB2B2`;

} else {
  errorDiv.appendChild(document.createTextNode('It\'s a tie!')); 
  effect.style.backgroundColor=`#90CDF4`;
  effect2.style.backgroundColor=`#90CDF4`;
}

//placing of dynamically created div
const mainDiv = document.querySelector('.main');
mainDiv.parentNode.insertBefore(errorDiv, mainDiv);

