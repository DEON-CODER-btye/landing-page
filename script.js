const minsBtn = document.querySelector(".mins");
const plusBtn = document.querySelector(".plus");
const CartValue = document.querySelector(".value");
const text = document.querySelector('.edition')
const open = document.querySelector('#hamburger')
const menu = document.querySelector('.menu')
const cuts = document.querySelector('.cuts')
const addToCart = document.querySelector('.add')
const numOfCart = document.querySelector('.addCart')


addToCart.addEventListener('click', () => {
  numOfCart.classList.add('cart')
})



open.addEventListener('click', () => {
  menu.classList.add('addmenu')
})
cuts.addEventListener('click', () => {
  menu.classList.remove('addmenu')
})





let btnValue = 0;

function shoesValue() {
  plusBtn.addEventListener("click", () => {
    if (btnValue >= 5) {
      alert("Reached Limit");
      return;
    }
    btnValue++;
    CartValue.innerText = btnValue;
  });

  minsBtn.addEventListener("click", () => {
    if (btnValue > 0) {
      btnValue--;
    }
    CartValue.innerText = btnValue;
  });
}

shoesValue();



let wordList = ['Sneakers']

let listWord = 0;
let wordLetter = 0;
let reverseType = false;
let skipUpdate = 0;


function autoType() {
  const interValId = setInterval(() => {
    if (skipUpdate) {
      skipUpdate--;
      return;
    }
    if (!reverseType) {
      skipUpdate = 2
      text.innerText = text.innerText + wordList[listWord][wordLetter];
      wordLetter++;
    } else {
      text.innerText = text.innerText.slice(0, text.innerText.length - 1);
      wordLetter--;
    }
    if (wordLetter === wordList[listWord].length) {
      skipUpdate = 6;
      reverseType = true;
    }
    if (wordLetter === 0 && reverseType) {
      reverseType = false;
      listWord = 0
    }
  }, 100)
}

autoType()

