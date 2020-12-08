"use strict";

const fs = require("fs");

function loadData(filename){
    let data = fs.readFileSync(filename).toString('utf-8');
    return data;
}

function getInstructions(data){
    let lines = data.split("\n");
    let instructions = [];
    for (let i=0; i<lines.length; i++){
        let instruction = { 
            command: lines[i].split(" ")[0],
            value: parseInt(lines[i].split(" ")[1])
        }
        instructions.push(instruction);
    }
    return instructions;
}

function execute(instruction, execution, callback){
    let logPtr = execution.ptr;
    let logAcc = execution.acc;
    let nextPtr = execution.ptr + 1;
    if (instruction.command == "acc") execution.acc += instruction.value;
    if (instruction.command == "jmp") nextPtr = execution.ptr + instruction.value;
    // if (instruction.cmd == "nop") DO NOTHING....
    execution.ptr = nextPtr;
    if (callback) callback(logPtr, logAcc);
}

function init(){
    let dataRaw = loadData("./data.dat");
    let instructions = getInstructions(dataRaw);
    var execution = {ptr: 0, acc: 0};
    let log = [];
    let lastAcc;
    while (!log.includes(execution.ptr) && execution.ptr < instructions.length){
        //console.log(instructions[execution.ptr]);
        execute(instructions[execution.ptr], execution, (logPtr, logAcc)=>{
            log.push(logPtr);
            lastAcc = logAcc;
        });
        //console.log(execution);
    }
    console.log(`Accumulator contents at loop = ${lastAcc}`);

}

init();