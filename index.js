console.log("this is printed from node js")

const fs = require('fs');
const testFolder = './';

fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
});
