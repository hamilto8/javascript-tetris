import changeSquare from './gameLogic';
import boardArr from './gameBoardArr'
import {currentPieceIdx, previousPieceIdx} from './gamePieceIdx';
import makeBlank from './makeBlank';
import {scoreNum} from './scoreTracker';

let pieceFallingInterval;

let currentPiece = currentPieceIdx["I"];

const pieceFalling = () => {
    if(currentPiece[3]+10 < boardArr.length){
        makeBlank(currentPiece[0]);
        for(let i = 0; i < currentPiece.length; i++){
            currentPiece[i] = currentPiece[i]+10;
        }
        changeSquare();
    } else {
        const scoreBoard = document.querySelector('.score');
        scoreBoard.innerText = `Total Score: 100`;
        console.log('end reached');
        // currentPiece = currentPieceIdx["L"];
        clearInterval(pieceFallingInterval);
    } 
}

const startGame = () => {
    changeSquare();
    initiatePieceFallingInterval();
};

const initiatePieceFallingInterval = () => pieceFallingInterval = setInterval(pieceFalling, 1000);


export {initiatePieceFallingInterval, startGame}