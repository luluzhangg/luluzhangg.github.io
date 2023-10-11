let oneBtn = document.getElementById("one");
let oneText = document.getElementById("text-1"); 
let introText = document.getElementById("information")
oneBtn.addEventListener("click", () => { 
   oneText.style.display = "block"; 
   introText.style.display = "none";
});
let twoBtn = document.getElementById("two");
twoBtn.addEventListener("click", () => { 
    oneText.style.display = "none"; 
 });

 //

let twoText = document.getElementById("text-2"); 
twoBtn.addEventListener("click", () => { 
   oneText.style.display = "none"; 
   introText.style.display = "none";
   twoText.style.display = "block"; 
});

let threeBtn = document.getElementById("three");
threeBtn.addEventListener("click", () => { 
    twoText.style.display = "none"; 
 });

 //

 let threeText = document.getElementById("text-3"); 
threeBtn.addEventListener("click", () => { 
  twoText.style.display = "none"; 
   threeText.style.display = "block"; 
   fourText.style.display ="none";
   introText.style.display = "none";
});

let fourBtn = document.getElementById("four");
fourBtn.addEventListener("click", () => { 
    threeText.style.display = "none"; 
 });

// let threeText = document.getElementById("text-3"); 
// threeBtn.addEventListener("click", () => { 
//    threeText.style.display = "block"; 
// });
// let fourBtn = document.getElementById("four");
// threeBtn.addEventListener("click", () => { 
//     threeText.style.display = "none"; 
//  });

 //

 let fourText = document.getElementById("text-4"); 
 fourBtn.addEventListener("click", () => { 
    threeText.style.display = "none";
    introText.style.display = "none";
    fourText.style.display = "block"; 
 });
 let fiveBtn = document.getElementById("five");
 fiveBtn.addEventListener("click", () => { 
     fourText.style.display = "none"; 
  });

let externalText = document.getElementById("external")
let externalLayer = document.getElementById("title-1")
externalLayer.addEventListener("click", () => { 
  externalLayer.classList.add("close-1");
  externalText.style.display = "none";
});

let internalLayer = document.getElementById("title-2")
internalLayer.addEventListener("click", () => { 
  internalLayer.classList.add("close-1");
});

let homeButton = document.getElementById("home")
homeButton.addEventListener("click", () => {
  oneText.style.display = "none"; 
  twoText.style.display = "none"; 
  threeText.style.display = "none"; 
  fourText.style.display = "none"; 
  introText.style.display = "block";

});

// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

// Make the DIV element draggable:
dragElement(document.getElementById("nav"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Make the DIV element draggable:
dragElement(document.getElementById("nav-2"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
};

