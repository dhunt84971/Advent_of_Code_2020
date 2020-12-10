"use strict";

const fs = require("fs");

function loadData(filename){
    let data = fs.readFileSync(filename).toString('utf-8');
    return data;
}

function stringArrayToNum(arr){
    return arr.map(x=>parseInt(x));
}

function paths(number, target, data){
    let count = 0;
    let nextNums = data.filter(x=>x>number && x < number + 4);
    if (nextNums.length == 0) return 0
    else {
        for (let i=0; i<nextNums.length; i++){
            if (nextNums[i] == target){ 
                count ++;
            }
            else if (nextNums[i] < target){
                count += paths(nextNums[i], target, data);
            }
        }
    }
    console.log(`${number} = ${count}`);
    return count;
}

function factorial(n) { 
    var ans=1; 
    for (var i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
} 

function countBetween(target, data){
    let paths = [];
    let total = 1;
    for (let i=0; i<target; i++){
        let nextSet = data.filter(x=>x > i && x < i + 4 && x < target).length;
        if (nextSet != 0){
            console.log(nextSet);
            paths.push(nextSet);
            total *= nextSet;
            console.log(`total = ${total}`);
        }
    }
    console.log(paths);
    console.log(total);
}

function init(){
    let dataRaw = loadData("./sampledata.dat");
    let data = stringArrayToNum(dataRaw.split("\n"));
    let target = Math.max(...data);
    console.log(target);
    // let possibleCombinations = paths(0,target, data);
    // console.log(possibleCombinations);
    countBetween(5, data);
}

init();