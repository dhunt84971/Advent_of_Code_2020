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

function attemptFix(instruction){
    if (instruction.command == "jmp") instruction.command = "nop";
    else if (instruction.command == "nop") instruction.command = "jmp";
}

function runProgram(instructions, callback){
    var execution = {ptr: 0, acc: 0};
    let log = [];
    let lastAcc;
    let done = false;
    while (!log.includes(execution.ptr) && !done){
        execute(instructions[execution.ptr], execution, (logPtr, logAcc)=>{
            log.push(logPtr);
            lastAcc = logAcc;
        });
        done = execution.ptr == instructions.length;
    }
    if (callback) callback(done, lastAcc);
}

function init(){
    let dataRaw = loadData("./data.dat");
    let instructions = getInstructions(dataRaw);
    let fixed = false;
    let repairedPtr = 0;
    let lastAcc = 0;
    while (!fixed){
        attemptFix(instructions[repairedPtr]);
        runProgram(instructions, (done, logAcc)=>{
            fixed = done;
            lastAcc = logAcc;
            if (!fixed){
                // Restore the instruction to its original state.
                attemptFix(instructions[repairedPtr]);
                repairedPtr ++;
            }
        });
    }
    if (fixed) console.log(`Fixed program.  Last accumulator was ${lastAcc}.`);
}

init();