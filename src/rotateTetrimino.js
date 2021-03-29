import {currentPieceIdx} from './gamePieceIdx';

const rotateTetrimino = () => {
    if(currentPieceIdx["I"]["POS"] === 1){
        currentPieceIdx["I"]["POS"] = 2;
    }
}

export default rotateTetrimino