let num = 16;


for (let i = 0; i < num * num; i++) {
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');


container.appendChild(content);
}

if (num == 64) {
    container.classList.add('sixtyfour');
}



function numberPrompt() {
    num2 = prompt('How many boxes?');
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
     while(container.firstChild) {
        container.firstChild.remove();     
    }
     
 })
}

btn.addEventListener('click', () => {
    numberPrompt()
     for (let j = 0; j < num2 * num2; j++) {
        const container = document.querySelector('#container');
        
        const content = document.createElement('div');
        content.classList.add('contentx');
        
        content.addEventListener('mouseover', () => {
            content.classList.add('black');
        })
        
        container.appendChild(content);
        
        
        
        }

})



