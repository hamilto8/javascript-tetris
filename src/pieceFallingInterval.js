import changeSquare from './gameLogic';
import boardArr from './gameBoardArr'
import {currentPieceIdx, previousPieceIdx} from './gamePieceIdx';
import makeBlank from './makeBlank';
import {scoreNum} from './scoreTracker';

const pieceFallingInterval = () => {
    const scoreBoard = document.querySelector('.score');
    changeSquare();
    setInterval(() => {
        if(currentPieceIdx[3]+10 < boardArr.length){
            makeBlank(currentPieceIdx[0]);
            for(let i = 0; i < currentPieceIdx.length; i++){

                currentPieceIdx[i] = currentPieceIdx[i]+10;
            }
            changeSquare();
        } else {
            scoreBoard.innerText = `Total Score: 100`;
            alert('end');
            console.log('end reached');
            stopTimer();
        }
    }, 1000);
}

const stopTimer = () => {
    clearInterval(pieceFallingInterval);
}

export default pieceFallingInterval