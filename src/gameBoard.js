import boardArr from './gameBoardArr';
import clickBox from './gameLogic';

function gameBoard(){

    const innerBoard = document.createElement('div');
        innerBoard.classList.add('game-board');

    boardArr.forEach((boardSquare, idx)=>{
        const squareDiv = document.createElement('div');
            squareDiv.dataset.index = idx;
            squareDiv.classList.add('board-square-div');
            squareDiv.addEventListener('click', clickBox);
        innerBoard.appendChild(squareDiv);
    });

    const outerBoard = document.createElement('div');
        outerBoard.classList.add('outer-board');

        outerBoard.appendChild(innerBoard);
    
    return outerBoard;
}

export default gameBoard;