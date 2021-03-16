// https://blog.svarun.dev/how-to-create-a-github-action-in-nodejs
// https://github.com/actions/toolkit/tree/main/packages/core
const core = require('@actions/core');
const { exec } = require('child_process');
const fs = require('fs');

exec('npm i license-checker', (err, stdout, stderr) => {
    if(err) {
        console.log('failed to install license checker lib')
    }

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);

    exec('license-checker --json > licenses.json', () => {
        console.log('completed running the command');
    })
})

const testFolder = './';

fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
});

const nameToGreet = core.getInput( 'other-greet' , {required: true});
console.log("name to greet normal value - ", nameToGreet)
core.setOutput( "time", new Date().toDateString());
