import changeSquare from './gameLogic';
import pieceFallingInterval from './pieceFallingInterval';

const startBtn = () =>{
    const start = document.createElement('button');
        start.innerText = 'Start';
        start.classList.add('start-btn');
        start.addEventListener('click', pieceFallingInterval);
    
    return start;
}

export default startBtn