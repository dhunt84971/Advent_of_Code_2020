"use strict";

const fs = require("fs");

function loadData(filename){
    let data = fs.readFileSync(filename).toString('utf-8');
    return data;
}

function stringArrayToNum(arr){
    return arr.map(x=>parseInt(x));
}



function init(){
    let dataRaw = loadData("./data.dat");
    let data = stringArrayToNum(dataRaw.split("\n"));
    let plus1 = 1;
    let plus3 = 1;
    for (let i=0; i<data.length; i++){
        if (data.find(x=>x==data[i]+1)){
            plus1 ++;
        }
        else if (data.find(x=>x==data[i]+3)){
                plus3 ++;
        }
    }
    console.log(`The 1-jolt differences total ${plus1}.`);
    console.log(`The 3-jolt differences total ${plus3}.`);
    console.log(`The product is ${plus1 * plus3}.`);
}

init();