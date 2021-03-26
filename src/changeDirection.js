import changeSquare from './gameLogic';
import {currentPieceIdx, previousPieceIdx} from './gamePieceIdx';

const move = (e) => {
    if(e.key === "ArrowRight"){
        moveRight();
    } else if (e.key === "ArrowLeft"){
        moveLeft();
    }
}

const moveRight = () => {
    console.log('moving right');
}

const moveLeft = () => {
    console.log('moving left');
}

export {move, moveLeft, moveRight}