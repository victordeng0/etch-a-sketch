


for (let i = 0; i < 256; i++) {
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
//content.textContent = 'Hello World';

container.appendChild(content);
}

// for (let i = 0; i<16; i++) {
//     const row = document.querySelector('.content');

//     const nested = document.createElement('div');
//     nested.classList.add('nested');

//     nested.textContent = 'Hello World';
//     row.appendChild('nested');
// }

 const colorChange = document.querySelectorAll('.content');

 for (let i = 0; i<colorChange.length; i++) {
     colorChange[i].addEventListener('mouseover', () => {
        colorChange[i].classList.add('black');
     
     })
 }

//  colorChange.addEventListener('mouseover', () => {

//     colorChange.classList.add('black')
   

//  });

 const btn = document.querySelector('button');

 for (let i = 0; i<colorChange.length; i++) {
 btn.addEventListener('click', () => {
     colorChange[i].classList.remove('black');
 })
}