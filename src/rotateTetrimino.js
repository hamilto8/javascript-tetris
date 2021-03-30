import {currentPieceIdx} from './gamePieceIdx';
import {currentPiece} from './pieceFallingInterval';

const rotateTetrimino = () => {
    if(currentPieceIdx["I"]["POS"] === 1){
        currentPieceIdx["I"]["POS"] = 2;
        // currentPiece = currentPieceIdx["I"]["POS2_IDX"];
    } else if (currentPieceIdx["I"]["POS"] === 2){
        currentPieceIdx["I"]["POS"] = 1;
    }
}

export default rotateTetrimino