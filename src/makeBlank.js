const makeBlank = (idx) => {
    const squareArray = Array.from(document.querySelectorAll('.board-square-div'));
    squareArray.forEach((div)=>{
        if(parseInt(div.dataset.index) === idx){
            div.style.backgroundColor = '#fff';
        }
    });
    console.log(idx);
}

export default makeBlank