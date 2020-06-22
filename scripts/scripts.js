let num = 16;


for (let i = 0; i < num * num; i++) {
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
//content.textContent = 'Hello World';

container.appendChild(content);
}

if (num == 64) {
    container.classList.add('sixtyfour');
}


const colorChange = document.querySelectorAll('.content');

for (let i = 0; i<colorChange.length; i++) {
     colorChange[i].addEventListener('mouseover', () => {
        colorChange[i].classList.add('black');
     
     })
 }


 const btn = document.querySelector('button');

 for (let i = 0; i<colorChange.length; i++) {
 btn.addEventListener('click', () => {
     colorChange[i].classList.remove('black');
 })
}

