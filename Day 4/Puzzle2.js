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

function validateYear(year, low, high){
    let valid = true;
    let validator = /^\d{4}$/;
    if (!validator.test(year)){
        valid = false;
    } 
    else{
        if (parseInt(year) < low || parseInt(year) > high){
            valid = false;
        }
    }
    return valid;
}

function isValid(passport){
    let valid = true;
    
    // byr validation
    if (!passport.byr) valid = false;
    if (!validateYear(passport.byr, 1920, 2002)) valid = false;
    
    // iyr validation
    if (!passport.iyr) valid = false;
    if (!validateYear(passport.iyr, 2010, 2020)) valid = false;
    
    // eyr validation
    if (!passport.eyr) valid = false;
    if (!validateYear(passport.eyr, 2020, 2030)) valid = false;
    
    // hgt validation
    let hgtTest = /^\d+cm|\d+in$/;
    if (!passport.hgt) valid = false;
    if (!hgtTest.test(passport.hgt)){
        valid = false;
    }
    else{
        let hgtNum = parseInt(passport.hgt.replace(/\D/g,""));
        //console.log(hgtNum);
        if (passport.hgt.includes("cm")){
            if (hgtNum < 150 || hgtNum > 193){
                valid = false;
                //console.log(passport.hgt);
            } 
            
        }
        if (passport.hgt.includes("in")){
            if (hgtNum < 59 || hgtNum > 76){
                valid = false;
                //console.log(passport.hgt);
            } 

        }

    }

    // hcl validation
    if (!passport.hcl) valid = false;
    let hclTest = /^#([0-9]|[a-f]){6}$/;
    let validHcl = RegExp(/#[[0-9a-f]{6}/);
    if (!validHcl){
        console.log(`His test = ${passport.hcl}`);
    }
    if (!hclTest.test(passport.hcl)){
        valid = false;
        console.log(`My test = ${passport.hcl}`);
    }

    // ecl validation
    if (!passport.ecl) valid = false;
    let eclTest = /^amb|blu|brn|gry|grn|hzl|oth$/;
    if (!eclTest.test(passport.ecl)){
        valid = false;
        //console.log(passport.ecl);
    }

    // pid validation
    if (!passport.pid) valid = false;
    let pidTest = /^\d{9}$/;
    if (!pidTest.test(passport.pid)){
        valid = false;
        //console.log(passport.pid);
    }

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