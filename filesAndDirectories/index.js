const fs = require('fs');
const path = require('path');

let currentDirectory =path.join(__dirname, '..');
let files = fs.readdirSync(currentDirectory);
console.log(files)

// fs.mkdirSync('../emails'); // Make a Directory
// fs.rmdirSync('../charts');  // Remove a Directory