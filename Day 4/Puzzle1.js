const fs = require("fs");

function loadData(filename){
    let data = fs.readFileSync(filename).toString('utf-8');
    return data;
}

function convertDataToJSON(data){
    let dataJSONstr = "";
    let dataJSON = {};
    let passports = data.split("\n\n");
    let newPassports = [];
    for (let i=0; i<passports.length; i++){
        let fields = passports[i].replace(/\n/g," ").split(" ");
        let newFields = [];
        for (let j=0; j<fields.length; j++){
            let field = fields[j].split(":");
            newFields.push(`"${field[0]}":"${field[1]}"`);
        }
        newPassports.push(`{${newFields.join(",")}}`);
    }
    dataJSONstr = `{"passports": [${newPassports.join(",")}]}`;
    dataJSON = JSON.parse(dataJSONstr);
    return dataJSON;
}

function isValid(passport){
    let valid = true;
    if (!passport.ecl) valid = false;
    if (!passport.pid) valid = false;
    if (!passport.eyr) valid = false;
    if (!passport.hcl) valid = false;
    if (!passport.byr) valid = false;
    if (!passport.iyr) valid = false;
    if (!passport.hgt) valid = false;

    return valid;
}

function init(){
    let dataRaw = "";
    let dataJSON = {};
    let dataFileName = "./data.dat";

    dataRaw = loadData(dataFileName);
    dataJSON = convertDataToJSON(dataRaw);
    let passports = dataJSON.passports;
    
    let validCount = 0;
    for(let passport of passports){
        validCount += isValid(passport);
    }

    console.log(`There are ${validCount} valid passports.`);
    
}

init();