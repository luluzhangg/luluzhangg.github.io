var divs = document.getElementsByTagName('p');
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

for ( var i=0; i < divs.length; i++ ) {
 	
    var thisDiv = divs[i];
    
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    
}

function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}

var modal = document.getElementById('enter');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}