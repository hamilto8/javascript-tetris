function gameBoard(){
    const innerBoard = document.createElement('div');
        innerBoard.classList.add('game-board');

    const outerBoard = document.createElement('div');
        outerBoard.classList.add('outer-board');

        outerBoard.appendChild(innerBoard);

    return outerBoard;
}

export default gameBoard;