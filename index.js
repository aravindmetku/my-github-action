const fs = require('fs');
console.log("this is printed from node js")

const testFolder = './';

fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
});
