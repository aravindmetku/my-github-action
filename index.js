// https://blog.svarun.dev/how-to-create-a-github-action-in-nodejs
// https://github.com/actions/toolkit/tree/main/packages/core
const core = require('@actions/core');
const {exec} = require('child_process');
const fs = require('fs');
const http = require('https')

exec('npm i license-checker', (err, stdout, stderr) => {
    if (err) {
        console.log('failed to install license checker lib')
    }

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);

    exec('license-checker --json > licenses.json', () => {
        console.log('completed running the command');

        const testFolder = './';


        const file = fs.createWriteStream("gradle-init.gradle");
        const request = http.get("https://github.com/aravindmetku/my-github-action/blob/main/g-init.gradle", function(response) {
            response.pipe(file);

            var stats = fs.statSync("gradle-init.gradle")
            var fileSizeInBytes = stats.size;
            var fileSizeInMegabytes = fileSizeInBytes / (1024*1024);

            console.log('gradle file size ', fileSizeInMegabytes)
            fs.readdirSync(testFolder).forEach(file => {
                console.log(file);
            });
        });

        const nameToGreet = core.getInput('other-greet', {required: true});
        console.log("name to greet normal value - ", nameToGreet)
        core.setOutput("time", new Date().toDateString());
    })
})

