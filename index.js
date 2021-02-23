
const cardsMain= document.querySelector(`.maincards`);
const cards = cardsMain.querySelectorAll(`.cards`);

for (const task of cards) {
  task.draggable = true;
}

cardsMain.addEventListener(`dragstart`, (evt) => {
  evt.target.classList.add(`selected`);
});

cardsMain.addEventListener(`dragend`, (evt) => {
  evt.target.classList.remove(`selected`);
});

//перетаскивать только в центр дропзоны (в середину карточки)
const getNextElement = (cursorPosition, currentElement) => {
  const currentElementCoord = currentElement.getBoundingClientRect();
  const currentElementCenterY = currentElementCoord.y + currentElementCoord.height /3;
  const currentElementCenterX = currentElementCoord.x + currentElementCoord.height /3;
  const nextElement = (cursorPosition < currentElementCenterY && cursorPosition < currentElementCenterX) ?
    currentElement :
    currentElement.nextElementSibling;
  
  return nextElement;
};

cardsMain.addEventListener(`dragover`, (evt) => {
  evt.preventDefault();
  
  const activeElement = cardsMain.querySelector(`.selected`);
  const currentElement = evt.target;
  const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains(`cards`);
    
  if (!isMoveable) {
    return;
  }
  
  const nextElement = getNextElement(evt.clientY, currentElement);
  
  if (
    nextElement && 
    activeElement === nextElement.previousElementSibling ||
    activeElement === nextElement
  ) {
    return;
  }
		
	cardsMain.insertBefore(activeElement, nextElement);
});

// функции для каждой из карточек, 
// как мапить элементы с массивом названий в нативном js без jsx или jquery я не знаю

function HoverPanel1() {
  let a = document.getElementById("panel1");
  let style = window.getComputedStyle(a,"");
  a.style.display=((style.display=="none")? "block":"none");
}

function EditLabel1() {
  let a = document.getElementById("header1").value;
  document.getElementById("label1").innerHTML = a;
}

function HoverPanel2() {
  let a = document.getElementById("panel2");
  let style = window.getComputedStyle(a,"");
  a.style.display=((style.display=="none")? "block":"none");
}

function EditLabel2() {
  let a = document.getElementById("header2").value;
  document.getElementById("label2").innerHTML = a;
}

function HoverPanel3() {
  let a = document.getElementById("panel3");
  let style = window.getComputedStyle(a,"");
  a.style.display=((style.display=="none")? "block":"none");
}

function EditLabel3() {
  let a = document.getElementById("header3").value;
  document.getElementById("label3").innerHTML = a;
}

function HoverPanel4() {
  let a = document.getElementById("panel4");
  let style = window.getComputedStyle(a,"");
  a.style.display=((style.display=="none")? "block":"none");
}

function EditLabel4() {
  let a = document.getElementById("header4").value;
  document.getElementById("label4").innerHTML = a;
}

function HoverPanel5() {
  let a = document.getElementById("panel5");
  let style = window.getComputedStyle(a,"");
  a.style.display=((style.display=="none")? "block":"none");
}

function EditLabel5() {
  let a = document.getElementById("header5").value;
  document.getElementById("label5").innerHTML = a;
}

function HoverPanel6() {
  let a = document.getElementById("panel6");
  let style = window.getComputedStyle(a,"");
  a.style.display=((style.display=="none")? "block":"none");
}

function EditLabel6() {
  let a = document.getElementById("header6").value;
  document.getElementById("label6").innerHTML = a;
}

function HoverPanel7() {
  let a = document.getElementById("panel7");
  let style = window.getComputedStyle(a,"");
  a.style.display=((style.display=="none")? "block":"none");
}

function EditLabel7() {
  let a = document.getElementById("header7").value;
  document.getElementById("label7").innerHTML = a;
}

function HoverPanel8() {
  let a = document.getElementById("panel8");
  let style = window.getComputedStyle(a,"");
  a.style.display=((style.display=="none")? "block":"none");
}

function EditLabel8() {
  let a = document.getElementById("header8").value;
  document.getElementById("label8").innerHTML = a;
}

function HoverPanel9() {
  let a = document.getElementById("panel9");
  let style = window.getComputedStyle(a,"");
  a.style.display=((style.display=="none")? "block":"none");
}

function EditLabel9() {
  let a = document.getElementById("header9").value;
  document.getElementById("label9").innerHTML = a;
}

function HoverPanel10() {
  let a = document.getElementById("panel10");
  let style = window.getComputedStyle(a,"");
  a.style.display=((style.display=="none")? "block":"none");
}

function EditLabel10() {
  let a = document.getElementById("header10").value;
  document.getElementById("label10").innerHTML = a;
}

function HoverPanel11() {
  let a = document.getElementById("panel11");
  let style = window.getComputedStyle(a,"");
  a.style.display=((style.display=="none")? "block":"none");
}

function EditLabel11() {
  let a = document.getElementById("header11").value;
  document.getElementById("label11").innerHTML = a;
}

function HoverPanel12() {
  let a = document.getElementById("panel12");
  let style = window.getComputedStyle(a,"");
  a.style.display=((style.display=="none")? "block":"none");
}

function EditLabel12() {
  let a = document.getElementById("header12").value;
  document.getElementById("label12").innerHTML = a;
}


