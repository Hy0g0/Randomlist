const fs = require('fs');

function readInTxt(filename){
    const data = fs.readFileSync(filename, 'utf8');
    const lines = data.split(/\r\n|\r|\n/g);
    return lines;
}

function tirrageEquipes(lines,teamNumber){
    let results = [];
    const equipNum = Math.floor(lines.length/teamNumber);
    for (let i = 0; i < equipNum; i++) {
       let result = [];
    for(let i=0; i<teamNumber; i++){
        let ran = (Math.floor(Math.random()*lines.length))
        result.push(lines[ran]);
        lines.splice(ran, 1);
        
    }
    results.push(result);
}if(lines.length > 0){results.push(lines)}
    return results;
}

const names = readInTxt("names.txt");
const teams = tirrageEquipes(names, process.argv[2]);
console.log(teams)
