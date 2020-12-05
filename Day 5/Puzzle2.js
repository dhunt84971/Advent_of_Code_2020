const fs = require("fs");
const { isDate } = require("util");

function loadData(filename){
    let data = fs.readFileSync(filename).toString('utf-8');
    return data;
}

function convertToBinary(data, upChar){
    let result = 0;
    for (let i=0; i<data.length; i++){
        result += (data.charAt(i) == upChar) ? 2**(data.length-i-1) : 0;
    }
    return result;
}

function getRowNum(bPass, len){
    return convertToBinary(bPass.substr(0,len), "B");
}

function getColNum(bPass, start, len){
    return convertToBinary(bPass.substr(start,len), "R");
}

function getSeatID(row, col, factor){
    return row * factor + col;
}

function init(){
    let dataRaw = loadData("./data.dat");
    let data = dataRaw.split("\n");
    let highestId = 0;
    let lowestId = 999;
    var ids = [];
    
    for (let i=0; i<data.length; i++){
        let r = getRowNum(data[i], 7);
        let c = getColNum(data[i], 7, 3);
        let id = getSeatID(r,c,8);
        ids.push(id);
        if (highestId < id) highestId = id;
        if (lowestId > id && id != 0) lowestId = id;
    }
    console.log(`The highest ID = ${highestId}`);
    console.log(`The lowest ID = ${lowestId}`);

    for (let i=lowestId; i<=highestId;i++){
        let seatTaken = ids.includes(i);
        //if (seatTaken) console.log(`ID = ${i} is taken.`);
        if (!seatTaken) console.log(`ID = ${i} is NOT taken.`);
    }
}

init();