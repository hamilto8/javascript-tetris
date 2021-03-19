function score(){
    const scoreBoard = document.createElement('h3');
        scoreBoard.classList.add('score');
        scoreBoard.innerText = 'Score Board';
    
    return scoreBoard;
}

export default score;