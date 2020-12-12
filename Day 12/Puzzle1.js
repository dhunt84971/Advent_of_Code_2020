"use strict";

const fs = require("fs");

class ship {
    constructor(startingDir, startpoint) {
        this.directions = [
            {name: "E", x:1, y:0},
            {name: "S", x:0, y:-1},
            {name: "W", x:-1, y:0},
            {name: "N", x:0, y:1}
        ];
        this.dirIndex = this.getDirIndex(startingDir);
        this.x = startpoint.x;
        this.y = startpoint.y;
        this.ptr = -1;
        this.arrived = false;
    }

    getDirIndex(direction){
        return this.directions.findIndex(x=>x.name==direction);
    }

    parseInstruction(instruction){
        let dir = instruction.charAt(0);
        let move = parseInt(instruction.substr(1));
        return {dir: dir, move: move}
    }

    loadInstructions(data){
        let parsed = [];
        for (let i=0; i<data.length; i++){
            parsed.push(this.parseInstruction(data[i]));
        }
        this.instructions = parsed;
        return parsed;
    }

    turn(angle){
        let dirIndexOffset = angle/90;
        let newIndex = this.dirIndex + dirIndexOffset;
        if (newIndex < 0) newIndex += this.directions.length;
        if (newIndex > this.directions.length-1) newIndex -= this.directions.length;
        this.dirIndex = newIndex;
        return this;
    }

    move(instruction){
        // Process turns
        if (instruction.dir == "L"){
            this.turn(-1*instruction.move);
            return;
        }
        if (instruction.dir == "R"){
            this.turn(instruction.move);
            return;
        }
        // Process moves
        let dirIndex = (instruction.dir == "F") ? 
            this.dirIndex : 
            this.getDirIndex(instruction.dir);
        this.x += this.directions[dirIndex].x * instruction.move;
        this.y += this.directions[dirIndex].y * instruction.move;
        return;
    }

    next(){
        this.ptr += 1;
        this.arrived = this.ptr == this.instructions.length;
        if (!this.arrived) this.move(this.instructions[this.ptr]);
    }

    travel(){
        if (!this.instructions) throw "Load travel instructions first.";
        while (!this.arrived) this.next();
    }

    manhattanDistance(){
        return Math.abs(this.x) + Math.abs(this.y);
    }
}

function loadData(filename){
    let data = fs.readFileSync(filename).toString('utf-8');
    return data;
}

function init(){
    let dataRaw = loadData("./data.dat");
    let data = dataRaw.split("\n");
    let startpoint = { x: 0, y: 0 };
    const myShip = new ship("E", startpoint); 
    myShip.loadInstructions(data);   
    myShip.travel();
    console.log(`The ship traveled ${myShip.manhattanDistance()}`);
}

init();