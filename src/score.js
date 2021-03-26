import {scoreNum} from './scoreTracker';

function score(){
    const scoreBoard = document.createElement('h3');
        scoreBoard.classList.add('score');
        scoreBoard.innerText = `Total Score: ${scoreNum}`;
    
    return scoreBoard;
}

export default score;