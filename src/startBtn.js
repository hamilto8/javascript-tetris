import changeSquare from './gameLogic';
import {pieceFallingInterval, startGame} from './pieceFallingInterval';

const startBtn = () =>{
    const start = document.createElement('button');
        start.innerText = 'Start';
        start.classList.add('start-btn');
        start.addEventListener('click', startGame);
    
    return start;
}

export default startBtn