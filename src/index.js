import gameBoard from './gameBoard';
import scoreBoard from './score';
import changeSquare from './gameLogic';
import startBtn from './startBtn';
import {move, moveRight, moveLeft} from './changeDirection';

const contentDiv = document.querySelector('#content');
const title = document.createElement('h1');
    title.innerText = 'JavaScript Tetris';
    title.classList.add('title');

const footer = document.createElement('footer');
    footer.innerText = 'Make the Blocks Go';
    footer.classList.add('footer');

contentDiv.appendChild(title);
contentDiv.appendChild(scoreBoard());
contentDiv.appendChild(gameBoard());
contentDiv.appendChild(startBtn());
contentDiv.appendChild(footer);

document.addEventListener('keydown', move);