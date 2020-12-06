"use strict";

const fs = require("fs");

function loadData(filename){
    let data = fs.readFileSync(filename).toString('utf-8');
    return data;
}

function init(){
    let dataRaw = loadData("./data.dat");

    let data = dataRaw.split("\n\n");
    let sum = 0;
    for (let i=0; i<data.length; i++){
        let answers = data[i].split("\n");
        let answerCount = 0;
        // Iterate through the characters in the first set of answers.
        for (let j=0; j< answers[0].length; j++){
            
            // Get the number of answers filter for that letter.
            let numAnswered = answers.filter(x=>x.includes(answers[0].charAt(j))).length;

            // If the number of answers filtered for that letter equals the number of answers
            // then everyone answered yes to this question.
            if (numAnswered == answers.length){
                answerCount ++;
            }
        }
        sum += answerCount;
    }
    console.log(`The sum of counts = ${sum}`);
}

init();