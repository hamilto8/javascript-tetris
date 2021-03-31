import {scoreNum, scoreSetter} from './scoreTracker';

function displayScore(){
    let scoreNumArr = scoreSetter.getScore;

    const scoreBoard = document.createElement('h3');
        scoreBoard.classList.add('score');
        scoreBoard.innerText = `Total Score: ${scoreNumArr}`;
    
    return scoreBoard;
}

export default displayScore;