import changeSquare from './gameLogic';
import {currentPieceIdx, previousPieceIdx} from './gamePieceIdx';
import makeBlank from './makeBlank';
import rotateTetrimino from './rotateTetrimino';

const move = (e) => {
    if(e.key === "ArrowRight"){
        moveRight();
    } else if (e.key === "ArrowLeft"){
        moveLeft();
    } else if (e.code === 'Space'){
        rotateTetrimino();
    }
}

const moveRight = () => {
    console.log('moving right');
    let arr = currentPieceIdx["I"];

    for(let i = 0; i < arr.length; i++){
        makeBlank(arr[i]);
        currentPieceIdx["I"][i] = arr[i]+1;
    }
}

const moveLeft = () => {
    console.log('moving left');
    let arr = currentPieceIdx["I"];

    for(let i = 0; i < arr.length; i++){
        makeBlank(arr[i]);
        currentPieceIdx["I"][i] = arr[i]-1;
    }
}

export {move, moveLeft, moveRight}