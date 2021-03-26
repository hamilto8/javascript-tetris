import changeSquare from './gameLogic';
import boardArr from './gameBoardArr'
import {currentPieceIdx, previousPieceIdx} from './gamePieceIdx';
import makeBlank from './makeBlank';
import {scoreNum} from './scoreTracker';

let pieceFallingInterval;

const pieceFalling = () => {
    if(currentPieceIdx[3]+10 < boardArr.length){
        makeBlank(currentPieceIdx[0]);
        for(let i = 0; i < currentPieceIdx.length; i++){
            currentPieceIdx[i] = currentPieceIdx[i]+10;
        }
        changeSquare();
    } else {
        const scoreBoard = document.querySelector('.score');
        scoreBoard.innerText = `Total Score: 100`;
        alert('end');
        console.log('end reached');
        clearInterval(pieceFallingInterval)
    }
}

const startGame = () => {
    changeSquare();
    initiatePieceFallingInterval();
};

const initiatePieceFallingInterval = () => pieceFallingInterval = setInterval(pieceFalling, 1000);


export {initiatePieceFallingInterval, startGame}