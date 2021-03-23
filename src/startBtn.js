import changeSquare from './gameLogic';

const startBtn = () =>{
    const start = document.createElement('button');
        start.innerText = 'Start';
        start.classList.add('start-btn');
        start.addEventListener('click', changeSquare);
    
    return start;
}

export default startBtn