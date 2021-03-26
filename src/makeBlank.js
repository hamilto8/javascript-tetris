import boardArr from "./gameBoardArr";

const makeBlank = (idx) => {
    const squareArray = Array.from(document.querySelectorAll('.board-square-div'));
    squareArray.forEach((div)=>{
        if(parseInt(div.dataset.index) === idx){
            div.style.backgroundColor = '#fff';
            div.classList.remove('taken');
            const boardIdx = parseInt(div.dataset.index);
            boardArr[boardIdx] = '';
        }
    });
}

export default makeBlank