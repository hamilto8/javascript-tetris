import changeSquare from './gameLogic';
import boardArr from './gameBoardArr'
import {currentPieceIdx, previousPieceIdx} from './gamePieceIdx';
import makeBlank from './makeBlank';
import {scoreNum} from './scoreTracker';

let pieceFallingInterval;

let currentPiece = currentPieceIdx["I"]["POS1_IDX"];

const pieceFalling = () => {
    // for(let i = 0; i < currentPieceIdx["I"]["POS2_IDX"].length; i++){
    //     currentPieceIdx["I"]["POS2_IDX"][i] += 10;
    // }
    if(currentPieceIdx["I"]["POS"] === 1){
        if(currentPiece[3]+10 < boardArr.length){
            makeBlank(currentPiece[0]);
            for(let i = 0; i < currentPiece.length; i++){
                currentPiece[i] = currentPiece[i]+10;
            }
            changeSquare();
        } else {
            const scoreBoard = document.querySelector('.score');
            scoreBoard.innerText = `Total Score: 100`;
            console.log('end reached');
            // currentPiece = currentPieceIdx["L"];
            clearInterval(pieceFallingInterval);
        } 
    } else if (currentPieceIdx["I"]["POS"] === 2){
        for(let i = 0; i < currentPieceIdx["I"]["POS1_IDX"].length; i++){
            makeBlank(currentPieceIdx["I"]["POS1_IDX"][i]);
        }
        if(currentPieceIdx["I"]["POS2_IDX"][3]+10 < boardArr.length){
            currentPieceIdx["I"]["POS2_IDX"].forEach((idx)=>{
                makeBlank(idx);
            });
            for(let i = 0; i < currentPieceIdx["I"]["POS2_IDX"].length; i++){
                currentPieceIdx["I"]["POS2_IDX"][i] += 10;
            }
            changeSquare();
        } else {
            console.log('blah');
            clearInterval(pieceFallingInterval);
        }
        // if(currentPiece[3]+10 < boardArr.length){
        //     makeBlank(currentPiece[0]);
        //     for(let i = 0; i < currentPiece.length; i++){
        //         currentPiece[i] = currentPiece[i]+10;
        //     }
        //     changeSquare();
        // } else {
        //     const scoreBoard = document.querySelector('.score');
        //     scoreBoard.innerText = `Total Score: 100`;
        //     console.log('end reached');
        //     // currentPiece = currentPieceIdx["L"];
        //     clearInterval(pieceFallingInterval);
        // } 
    }
}

const startGame = () => {
    changeSquare();
    initiatePieceFallingInterval();
};

const initiatePieceFallingInterval = () => pieceFallingInterval = setInterval(pieceFalling, 1000);


export {initiatePieceFallingInterval, startGame}