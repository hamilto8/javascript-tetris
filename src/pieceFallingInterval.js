import changeSquare from './gameLogic';
import boardArr from './gameBoardArr'
import {currentPieceIdx, previousPieceIdx} from './gamePieceIdx';
import makeBlank from './makeBlank';

const pieceFallingInterval = () => {
    changeSquare();
    setInterval(() => {
        if(currentPieceIdx[2]+10 < boardArr.length){
            makeBlank(currentPieceIdx[0]);
            for(let i = 0; i < currentPieceIdx.length; i++){

                currentPieceIdx[i] = currentPieceIdx[i]+10;
            }
            changeSquare();
        } else {
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