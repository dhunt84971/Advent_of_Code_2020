const fs = require("fs");

function loadData(filename){
    let data = fs.readFileSync(filename).toString('utf-8');
    return data;
}

function getCombinations(dataRaw){
    // returns an array of objects:
    // let bag = {
    //     color: '',
    //     contains: [{color: '', qty: 0}, ...]
    // }
    let combos = dataRaw.split("\n");
    let combinations = [];
    for (let i=0; i<combos.length; i++){
        let bagColor = combos[i].split(" bags contain ")[0];
        let bagContents = combos[i].split(" bags contain ")[1];
        let bags = bagContents.split(", ");
        let bagContains = [];
        for (j=0; j<bags.length; j++){
            let qty = bags[j].split(" ")[0];
            //console.log(bags[j].split(" ").slice(1).join(" ").split(" bag")[0]);
            let color = bags[j].split(" ").slice(1).join(" ").split(" bag")[0];
            let contents = {color: color, qty: qty};
            bagContains.push(contents);
        }
        let combination = {
            color: bagColor,
            contains: bagContains
        };
        combinations.push(combination);
    }
    return combinations;
}

function getBagsContainingColor(color, combos, colorCombos){

    // Get all objects with contents that include the color.
    for (let i=0; i<combos.length; i++){
        for (let j=0; j<combos[i].contains.length;j++){
            if (combos[i].contains[j].color == color) {
                if (!colorCombos.includes(combos[i].color)){
                    colorCombos.push(combos[i].color);

                    colorCombos = getBagsContainingColor(combos[i].color, combos, colorCombos);
                }
            }
        }
    }

    return colorCombos;
    //console.log(getUnique(colorCombos));
}

function init(){
    let dataRaw = loadData("./data.dat");
    
    let combos = getCombinations(dataRaw);
    let colorCombos = [];
    colorCombos = getBagsContainingColor("shiny gold", combos, colorCombos);
    console.log(`Number of combinations = ${colorCombos.length}`);

}

init();