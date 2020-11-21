const colors = ["red", "blue", "green", "orange", "pink", "yellow", "salmon", "turquoise"];
const color = document.querySelector('.color');
const container = document.querySelector('.container');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
   let randomNumber = getRandomColor();
   document.body.style.backgroundColor = colors[randomNumber];
   color.innerHTML = colors[randomNumber];
});

function getRandomColor(){
   return Math.floor(Math.random() * colors.length)
};