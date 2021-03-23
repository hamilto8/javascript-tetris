import boardArr from './gameBoardArr';
import gamePieceL from './gamePieceL';
import {currentPieceIdx, previousPieceIdx} from './gamePieceIdx';

function changeSquare(){
    const squaresDivArr = Array.from(document.querySelectorAll('.board-square-div'));
    
    currentPieceIdx.forEach((idx)=>{
        squaresDivArr[idx].style.backgroundColor = 'red';
    });
    // squaresDivArr[1].style.backgroundColor = 'red';
    // squaresDivArr[11].style.backgroundColor = 'red';
    // squaresDivArr[21].style.backgroundColor = 'red';
}

export default changeSquare