import changeSquare from './gameLogic';
import boardArr from './gameBoardArr'
import {currentPieceIdx, previousPieceIdx} from './gamePieceIdx';

const pieceFallingInterval = () => {
    changeSquare();
    setInterval(() => {
        if(currentPieceIdx[2]+10 < boardArr.length){
            for(let i = 0; i < currentPieceIdx.length; i++){
                currentPieceIdx[i] = currentPieceIdx[i]+10;
            }
            changeSquare();
        } else {
            alert('end');
            console.log('end reached');
        }
    }, 1000);
}

export default pieceFallingInterval