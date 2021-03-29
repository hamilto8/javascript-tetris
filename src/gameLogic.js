import boardArr from './gameBoardArr';
import gamePieceL from './gamePieceL';
import {currentPieceIdx, previousPieceIdx} from './gamePieceIdx';

function changeSquare(){
    const squaresDivArr = Array.from(document.querySelectorAll('.board-square-div'));
    if(currentPieceIdx["I"]["POS"] === 1){
        currentPieceIdx["I"]["POS1_IDX"].forEach((idx)=>{
            const boardIdx = parseInt(squaresDivArr[idx].dataset.index);
            squaresDivArr[idx].style.backgroundColor = 'red';
            squaresDivArr[idx].classList.add('taken');
            boardArr[boardIdx] = 'x';
        });
    } else if (currentPieceIdx["I"]["POS"] === 2){
        currentPieceIdx["I"]["POS2_IDX"].forEach((idx)=>{
            const boardIdx = parseInt(squaresDivArr[idx].dataset.index);
            squaresDivArr[idx].style.backgroundColor = 'red';
            squaresDivArr[idx].classList.add('taken');
            boardArr[boardIdx] = 'x';
        });
    }
}

export default changeSquare