import boardArr from './gameBoardArr';
import gamePieceL from './gamePieceL';

function changeSquare(){
    const squaresDivArr = Array.from(document.querySelectorAll('.board-square-div'));
    let currentPieceIdx = [1, 11, 21];
    squaresDivArr[1].style.backgroundColor = 'red';
    squaresDivArr[11].style.backgroundColor = 'red';
    squaresDivArr[21].style.backgroundColor = 'red';
    if(!(currentPieceIdx[3]+10 > squaresDivArr.length)){
        currentPieceIdx.forEach((num,idx)=>{
            num += 10
            currentPieceIdx[idx] = num;
        });

        setTimeout(() => {
            squaresDivArr[1].style.backgroundColor = '#fff';
            currentPieceIdx.forEach((num)=>{
                squaresDivArr[num].style.backgroundColor = 'red';
            })
        }, 1000);
    }
}

export default changeSquare