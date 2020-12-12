"use strict";

const fs = require("fs");
const empty = "L";
const occupied = "#";
const floor = ".";
const invalid = "I";

function loadData(filename){
    let data = fs.readFileSync(filename).toString('utf-8');
    return data;
}

function getToken(i,j,data){
    if (i>= 0 && i < data.length){
        if (j>=0 && j < data[0].length){
            return data[i].charAt(j);
        }
    }
    return "I";
}

function replaceAt(text, index, replacement) {
    return text.substr(0, index) + replacement + text.substr(index + 1);
}

function seatVisible(i,j,direction, data){
    let occupiedSeat = false;
    let boundary = false;
    let emptySeat = false;
    while (!occupiedSeat && !boundary && !emptySeat){
        i += direction.i;
        j += direction.j;
        let token = getToken(i,j, data);
        if(token==occupied) occupiedSeat = true;
        if(token==empty) emptySeat = true;
        if(getToken(i,j, data)==invalid) boundary = true;
    }
    return occupiedSeat;
}

function getSeatsVisible(i,j,data){
    let count = 0;
    count += seatVisible(i,j, {i: -1, j: -1}, data);
    count += seatVisible(i,j, {i: 0, j: -1}, data);
    count += seatVisible(i,j, {i: 1, j: -1}, data);
    count += seatVisible(i,j, {i: -1, j: 0}, data);
    count += seatVisible(i,j, {i: 1, j: 0}, data);
    count += seatVisible(i,j, {i: -1, j: 1}, data);
    count += seatVisible(i,j, {i: 0, j: 1}, data);
    count += seatVisible(i,j, {i: 1, j: 1}, data);
    return count;
}

function applyRules(data){
    // If a seat is empty (L) and there are no occupied seats adjacent to it, 
    //      the seat becomes occupied.
    // If a seat is occupied (#) and four or more seats adjacent to it are also occupied, 
    //      the seat becomes empty.
    // Otherwise, the seat's state does not change.
    let newData = [];
    let seatsChanged = false;
    for (let i=0; i<data.length; i++){
        newData.push(data[i]);
        for (let j=0; j<data[i].length; j++){
            let token = data[i].charAt(j);
            if (token == empty){
                if (getSeatsVisible(i,j,data) == 0){
                    newData[i] = replaceAt(newData[i], j, occupied);
                    seatsChanged = true;
                }
            }
            if (token == occupied){
                if (getSeatsVisible(i,j,data) >= 5){
                    newData[i] = replaceAt(newData[i], j, empty);
                    seatsChanged = true;
                }
            }
        }
    }
    return {newData, seatsChanged};
}

function getNumOccupied(data){
    let count = 0;
    for (let i=0; i<data.length; i++){
        for (let j=0; j<data[i].length; j++){
            if (data[i].charAt(j) == occupied) count += 1;
        }
    }
    return count;
}

function init(){
    let dataRaw = loadData("./data.dat");
    let data = dataRaw.split("\n");
    let seatsChanged = true;
    while (seatsChanged) {
        let results = applyRules(data);
        seatsChanged = results.seatsChanged;
        data = results.newData;
    }
    console.log(getNumOccupied(data));
}

init();