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
        // Lump all answers into a single string by removing the newline.
        let answers = data[i].replace(/\n/g, "")

        // The Set command returns a list of unique letters in the string.
        let uniqueAnswers = new Set(answers);

        // Because Set returns a list and not an array 
        // use the size property to get the number of characters in the list. 
        sum += uniqueAnswers.size;
    }
    console.log(`The sum of counts = ${sum}`);
}

init();