// https://blog.svarun.dev/how-to-create-a-github-action-in-nodejs
// https://github.com/actions/toolkit/tree/main/packages/core
const core = require('@actions/core');

console.log("this is printed from node js")

const fs = require('fs');
const testFolder = './';

fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
});

const nameToGreet = core.getInput( 'other-greet' , {required: true});
console.log("name to greet normal value - ", nameToGreet)
core.setOutput( "time", new Date().toDateString());
