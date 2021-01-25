const mainDiv = document.querySelector('#main');
const button = document.querySelector('.first-button');

const welcome = `
    <h3 class="header">Welcome to JavaScript Tetris!</h3>
`;

button.addEventListener('click', firstFunction);

function firstFunction(){
    mainDiv.innerHTML += welcome;
}

console.log("Welcome to JavaScript Tetris!!")