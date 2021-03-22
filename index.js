const fs = require('fs');
const core = require("@actions/core");

const host = core.getInput("host");
const whoToGreet = core.getInput("who-to-greet");

console.log("this is printed from node js - ", host, whoToGreet)

const testFolder = './';

fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
});
