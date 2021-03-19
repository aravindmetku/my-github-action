const fs = require('fs');
const core = require("@actions/core");

const host = core.getInput("host");
console.log("this is printed from node js - ", host)

const testFolder = './';

fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
});
