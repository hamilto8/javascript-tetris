import gameBoard from './gameBoard';
import scoreBoard from './score';

const contentDiv = document.querySelector('#content');
const title = document.createElement('h1');
    title.innerText = 'JavaScript Tetris';
    title.classList.add('title');

const footer = document.createElement('footer');
    footer.innerText = 'Michael Hamilton 2021';
    footer.classList.add('footer');

contentDiv.appendChild(title);
contentDiv.appendChild(scoreBoard());
contentDiv.appendChild(gameBoard());

contentDiv.appendChild(footer);