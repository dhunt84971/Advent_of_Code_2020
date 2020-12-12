"use strict";

const fs = require("fs");

class ship {
    constructor(startingDir, startpoint, waypoint) {
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
        this.waypoint = waypoint;
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

    turnWP(angle){
        let turns = angle>0 ? angle/90 : (360 + angle)/90;
        for (let i=0; i<turns; i++){
            let x = this.waypoint.x;
            this.waypoint.x = this.waypoint.y;
            this.waypoint.y = -1*x;
        }
    }

    turn(angle){
        if (this.waypoint) return this.turnWP(angle);
        let dirIndexOffset = angle/90;
        let newIndex = this.dirIndex + dirIndexOffset;
        if (newIndex < 0) newIndex += this.directions.length;
        if (newIndex > this.directions.length-1) newIndex -= this.directions.length;
        this.dirIndex = newIndex;
    }

    moveWP(instruction){
        // Process turns
        if (instruction.dir == "L"){
            this.turnWP(-1*instruction.move);
            return;
        }
        if (instruction.dir == "R"){
            this.turnWP(instruction.move);
            return;
        }
        // Process move to waypoint
        if (instruction.dir == "F"){
            this.x += instruction.move * this.waypoint.x;
            this.y += instruction.move * this.waypoint.y;
            return;
        }
        // Process move waypoint
        let dirIndex = this.getDirIndex(instruction.dir);
        this.waypoint.x += this.directions[dirIndex].x * instruction.move;
        this.waypoint.y += this.directions[dirIndex].y * instruction.move;
        return;
    }

    move(instruction){
        if (this.waypoint) return this.moveWP(instruction);
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
    let waypoint = { x: 10, y: 1};
    const myShip = new ship("E", startpoint, waypoint);  
    myShip.loadInstructions(data);  
    //console.log(myShip);
    myShip.travel();
    console.log(`The ship traveled ${myShip.manhattanDistance()}`);
}

init();