"use strict";

const fs = require("fs");

function loadData(filename){
    let data = fs.readFileSync(filename).toString('utf-8');
    return data;
}

function isValid(preamble, number){
    let valid = false;
    for (let i=0; i<preamble.length; i++){
        for (let j=0; j<preamble.length; j++){
            if (i != j){
                if (parseInt(preamble[i]) + parseInt(preamble[j]) == number){ 
                    valid = true;
                    break;
                }
            }
        }
        if (valid) break;
    }
    return valid;
}

function findInvalid(preamble, data){
    let i =0;
    for (i=preamble; i<data.length; i++){
        if (!isValid(data.slice(i-preamble, i), data[i])) break;
    }
    return parseInt(data[i]);
}

function findRangeSumming(data, number){
    for (let i=0;i<data.length; i++){
        let smallest = 0;
        let largest = 0;
        let sum = 0;
        let j = i;
        while (sum < number){
            let testNum = parseInt(data[j]);
            if (smallest > testNum || smallest == 0) smallest = testNum;
            if (largest < testNum) largest = testNum;
            sum += testNum;
            j ++;
        }
        if (sum == number){
            console.log(`Smallest number is ${smallest} and largest is ${largest}.`);
            console.log(`The weakness is ${smallest + largest}.`);
            break;
        }
    }
}

function init(){
    let dataRaw = loadData("./data.dat");
    let data = dataRaw.split("\n");
    let invalidNum = findInvalid(25, data);
    console.log(`The invalid number is ${invalidNum}.`);
    findRangeSumming(data, invalidNum);
}

init();