"use strict";

const fs = require("fs");

function loadData(filename){
    let data = fs.readFileSync(filename).toString('utf-8');
    return data;
}

function stringArrayToNum(arr){
    return arr.map(x=>parseInt(x));
}

function getConsecutives(target, data){
    // This method counts the number of consecutive digits and groups these into
    // a number of possible paths.
    // The final number should be the product of all possible paths.
    // This method was described to me by Cpt.BeanSparrow.
    let i =0;
    let count = 0;
    let consecCounts = [];
    let number = 0;
    let nextNum = 0;
    while (number < target){
        nextNum = Math.min(...data.filter(x=>x>number));
        if (nextNum == number + 1){
            count ++;
        }
        else {
            consecCounts.push(count);
            count = 0;
        }
        number = nextNum;
    }
    // Push the last count.
    consecCounts.push(count);
    return consecCounts;
}

function calcPaths(counts){
    let countCalc = [];
    for (let i=0; i<counts.length;i++){
        let count = counts[i];
        if (count == 0) countCalc.push(1); // No consecutives.  This number must be used.  Paths = 1.
        if (count == 1) countCalc.push(1); // Only 1 consecutive digit.  
        if (count == 2) countCalc.push(2); 
        if (count == 3) countCalc.push(4);
        if (count >= 4) countCalc.push(2**(count-1)-1); // This calculation is supposed to take the binary paths and remove the ones that don't work.
    }
    return countCalc;
}

function product(arr){
    let result = 1;
    for (let i=0; i<arr.length; i++){
        result *= arr[i];
    }
    return result;
}

function init(){
    let dataRaw = loadData("./data.dat");
    let data = stringArrayToNum(dataRaw.split("\n"));
    let target = Math.max(...data);
    console.log(target);
    let consecutives = getConsecutives(target, data);
    console.log(consecutives);
    let paths = calcPaths(consecutives);
    console.log(paths);
    let pathTotal = product(paths);
    console.log(pathTotal);

    //countBetween(5, data);
}

init();