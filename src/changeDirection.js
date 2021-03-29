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
    let arr;
    if(currentPieceIdx["I"]["POS"] === 1){
        arr= currentPieceIdx["I"]["POS1_IDX"];
    } else if (currentPieceIdx["I"]["POS"] === 2){
        arr = currentPieceIdx["I"]["POS2_IDX"];
    }
    // let arr = currentPieceIdx["I"]["POS1_IDX"];

    for(let i = 0; i < arr.length; i++){
        makeBlank(arr[i]);
        currentPieceIdx["I"]["POS1_IDX"][i] = arr[i]+1;
    }
}

const moveLeft = () => {
    console.log('moving left');
    let arr = currentPieceIdx["I"]["POS1_IDX"];

    for(let i = 0; i < arr.length; i++){
        makeBlank(arr[i]);
        currentPieceIdx["I"]["POS1_IDX"][i] = arr[i]-1;
    }
}

export {move, moveLeft, moveRight}