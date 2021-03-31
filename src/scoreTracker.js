"use strict";

let scoreNum = 0;

function scoreSetter() {
    let scoreNum = null;
    let scoreArr = [];

    Object.defineProperty(this, "scoreNum", {
        get: function(){
            console.log("get!");
            return scoreNum;
        },
        set: function(num){
            scoreNum = num;
            scoreArr.push({val: scoreNum});
        }
    });
    this.getScore = function() {return scoreArr};
}

let score = new scoreSetter();

export {scoreNum, scoreSetter}